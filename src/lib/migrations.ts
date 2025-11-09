import db from './db'
import { hashPassword } from '@/utils/auth'
import { dataProjects } from '@/mock/dataProjects'

export async function runMigrations() {
  // Criar tabela de usuários
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `)

  // Criar tabela de projetos
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      stack TEXT NOT NULL,
      link TEXT NOT NULL,
      repo_name TEXT NOT NULL,
      repo TEXT NOT NULL,
      image_url TEXT,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `)

  // Adicionar coluna display_order se não existir (migration)
  try {
    db.exec('ALTER TABLE projects ADD COLUMN display_order INTEGER DEFAULT 0')
    console.log('✅ Coluna display_order adicionada')
  } catch (error) {
    // Coluna já existe, ignorar erro
  }

  // Atualizar display_order dos projetos existentes baseado no id
  db.exec(`
    UPDATE projects 
    SET display_order = id 
    WHERE display_order IS NULL OR display_order = 0
  `)

  // Verificar se já existe usuário admin
  const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin')

  if (!adminExists) {
    // Criar usuário admin
    const hashedPassword = await hashPassword('Silva#2021')
    db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run('admin', hashedPassword)
    console.log('✅ Usuário admin criado')
  }

  // Verificar se já existem projetos no banco
  const projectsCount = db.prepare('SELECT COUNT(*) as count FROM projects').get() as { count: number }

  if (projectsCount.count === 0) {
    // Migrar projetos existentes
    const insertProject = db.prepare(`
      INSERT INTO projects (name, description, stack, link, repo_name, repo, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)

    for (const project of dataProjects) {
      // Para imagens locais, vamos manter como null inicialmente
      // O usuário pode fazer upload depois via admin
      const imageUrl = typeof project.image === 'string' ? project.image : null

      insertProject.run(
        project.name,
        project.description,
        project.stack,
        project.link,
        project.repoName,
        project.repo,
        imageUrl
      )
    }
    console.log(`✅ ${dataProjects.length} projetos migrados para o banco`)
  }

  console.log('✅ Migrations executadas com sucesso')
}

