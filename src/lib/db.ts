import { Pool } from 'pg'

// Configurar pool de conexões PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // SSL é necessário para Render e outros serviços cloud
  // Se não houver DATABASE_URL, não tenta conectar (para desenvolvimento local sem banco)
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com') ? {
    rejectUnauthorized: false // Necessário para Render
  } : process.env.DATABASE_URL ? {
    rejectUnauthorized: false // Para outros serviços cloud também
  } : undefined,
})

// Executar migrations na primeira inicialização (apenas se houver DATABASE_URL)
let migrationsRun = false
let migrationsPromise: Promise<void> | null = null

if (typeof window === 'undefined' && !migrationsRun && process.env.DATABASE_URL) {
  migrationsRun = true
  migrationsPromise = import('./migrations')
    .then((module) => {
      return module.runMigrations()
    })
    .catch((error) => {
      console.error('Erro ao executar migrations:', error)
      throw error
    })
}

// Função para garantir que migrations foram executadas
export async function ensureMigrations() {
  if (migrationsPromise) {
    try {
      await migrationsPromise
      migrationsPromise = null // Limpar após primeira execução
    } catch (error) {
      console.error('Erro ao aguardar migrations:', error)
      migrationsPromise = null // Limpar mesmo em caso de erro para não travar
      throw error
    }
  }
}

// Helper para executar queries
export const query = async (text: string, params?: any[]) => {
  // Verificar se DATABASE_URL está configurado
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não está configurado. Configure a variável de ambiente DATABASE_URL.')
  }

  // Garantir que migrations foram executadas antes de fazer queries
  await ensureMigrations()
  
  try {
    const res = await pool.query(text, params)
    return res
  } catch (error) {
    console.error('Erro na query', { text, error })
    throw error
  }
}

// Helper para obter uma única linha
export const queryOne = async (text: string, params?: any[]) => {
  const result = await query(text, params)
  return result.rows[0] || null
}

// Helper para obter múltiplas linhas
export const queryAll = async (text: string, params?: any[]) => {
  const result = await query(text, params)
  return result.rows
}

export default pool
