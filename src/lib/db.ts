import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'src', 'database', 'portfolio.db')

// Garantir que o diretório existe
const dbDir = path.dirname(dbPath)
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

const db = new Database(dbPath)

// Habilitar foreign keys
db.pragma('foreign_keys = ON')

// Executar migrations na primeira inicialização
let migrationsRun = false
if (typeof window === 'undefined' && !migrationsRun) {
  migrationsRun = true
  import('./migrations')
    .then((module) => {
      module.runMigrations().catch(console.error)
    })
    .catch(console.error)
}

export default db

