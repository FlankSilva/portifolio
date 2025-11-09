import { Pool } from "pg";
import { hashPassword } from "@/utils/auth";
import { dataProjects } from "@/mock/dataProjects";

// Pool direto para migrations (evita loop infinito com ensureMigrations)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.DATABASE_URL && process.env.DATABASE_URL.includes("render.com")
      ? {
          rejectUnauthorized: false,
        }
      : process.env.DATABASE_URL
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

// Helper direto para migrations (sem ensureMigrations para evitar loop)
const migrationQuery = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (error: any) {
    // Não logar erros esperados (como coluna já existe)
    if (
      error.code !== "42701" &&
      !error.message?.includes("already exists") &&
      !error.message?.includes("duplicate")
    ) {
      console.error("Erro na query (migration)", { text, error });
    }
    throw error;
  }
};

export async function runMigrations() {
  try {
    // Criar tabela de usuários
    await migrationQuery(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Criar tabela de projetos
    await migrationQuery(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        stack TEXT NOT NULL,
        link TEXT NOT NULL,
        repo_name TEXT,
        repo TEXT,
        image_url TEXT,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Adicionar coluna display_order se não existir (migration)
    try {
      // Verificar se a coluna já existe antes de tentar adicionar
      const columnExists = await migrationQuery(`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'projects' AND column_name = 'display_order'
      `);

      if (columnExists.rows.length === 0) {
        await migrationQuery(
          "ALTER TABLE projects ADD COLUMN display_order INTEGER DEFAULT 0"
        );
        console.log("✅ Coluna display_order adicionada");
      }
    } catch (error: any) {
      // Se der erro ao verificar ou adicionar, verificar se é porque já existe
      if (error.code === "42701" || error.message?.includes("already exists")) {
        // Coluna já existe, tudo bem - continuar com as migrações
      } else {
        // Erro inesperado, logar mas continuar
        console.error("Erro ao adicionar coluna display_order:", error);
      }
    }

    // Atualizar display_order dos projetos existentes baseado no id
    await migrationQuery(`
      UPDATE projects 
      SET display_order = id 
      WHERE display_order IS NULL OR display_order = 0
    `);

    // Verificar se já existe usuário admin
    const adminResult = await migrationQuery(
      "SELECT id FROM users WHERE username = $1",
      ["admin"]
    );
    const adminExists = adminResult.rows[0];

    if (!adminExists) {
      // Criar usuário admin
      const hashedPassword = await hashPassword("Silva#2021");
      await migrationQuery(
        "INSERT INTO users (username, password) VALUES ($1, $2)",
        ["admin", hashedPassword]
      );
      console.log("✅ Usuário admin criado");
    }

    // Verificar se já existem projetos no banco
    const projectsCountResult = await migrationQuery(
      "SELECT COUNT(*) as count FROM projects"
    );
    const projectsCount = projectsCountResult.rows[0] as { count: string };

    if (parseInt(projectsCount.count) === 0) {
      // Migrar projetos existentes
      for (const project of dataProjects) {
        // Para imagens locais, vamos manter como null inicialmente
        // O usuário pode fazer upload depois via admin
        const imageUrl =
          typeof project.image === "string" ? project.image : null;

        // Pegar o maior display_order e adicionar 1
        const maxOrderResult = await migrationQuery(
          "SELECT COALESCE(MAX(display_order), 0) as max_order FROM projects"
        );
        const newOrder = (maxOrderResult.rows[0]?.max_order ?? 0) + 1;

        await migrationQuery(
          `INSERT INTO projects (name, description, stack, link, repo_name, repo, image_url, display_order)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            project.name,
            project.description,
            project.stack,
            project.link,
            project.repoName || "",
            project.repo || "",
            imageUrl,
            newOrder,
          ]
        );
      }
      console.log(`✅ ${dataProjects.length} projetos migrados para o banco`);
    }

    console.log("✅ Migrations executadas com sucesso");
  } catch (error) {
    console.error("Erro ao executar migrations:", error);
    throw error;
  }
}
