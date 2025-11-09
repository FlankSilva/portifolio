# Configuração do Banco de Dados - Render

## Variáveis de Ambiente Necessárias

Adicione as seguintes variáveis de ambiente na **Vercel** (Settings → Environment Variables):

### 1. DATABASE_URL (Obrigatório) ⚠️
```
DATABASE_URL=postgresql://user:password@host:port/database
```

**Como obter no Render:**
1. Acesse seu banco PostgreSQL no dashboard do Render
2. Vá em "Connections" ou "Info"
3. Copie a **External Database URL** (não a Internal!)
4. Cole no campo `DATABASE_URL` na Vercel

**Exemplo:**
```
DATABASE_URL=postgresql://portfolio_user:abc123@dpg-xxxxx-a.oregon-postgres.render.com/portfolio_db_xxxx
```

**⚠️ IMPORTANTE:** Use a **External Database URL**, não a Internal!

### 2. SESSION_SECRET (Opcional, mas recomendado)
```
SESSION_SECRET=seu-secret-key-aqui-aleatorio
```

Gere uma string aleatória segura para autenticação.

### 3. Cloudinary (Opcional - se usar upload de imagens)
```
CLOUDINARY_CLOUD_NAME=seu-cloud-name
CLOUDINARY_API_KEY=sua-api-key
CLOUDINARY_API_SECRET=seu-api-secret
```

### 4. Email (Opcional - para formulário de contato)
```
USER_EMAIL=seu-email@gmail.com
USER_EMAIL_PASS=sua-senha-de-app
```

## Como Configurar no Render

1. **Criar o banco PostgreSQL:**
   - Acesse [render.com](https://render.com)
   - Clique em "New +" → "PostgreSQL"
   - Configure:
     - Nome: `portfolio-db` (ou outro nome)
     - Região: Escolha próxima à Vercel
     - Plano: Free (90 dias) ou Starter ($7/mês)
   - Clique em "Create Database"

2. **Obter a Connection String:**
   - Após criar, vá em "Connections"
   - Copie a **External Database URL**
   - Formato: `postgresql://user:password@host:port/database`

3. **Configurar na Vercel:**
   - Vá em Settings → Environment Variables
   - Adicione: `DATABASE_URL` = (cole a URL copiada)
   - Adicione outras variáveis se necessário
   - Faça um novo deploy

## Estrutura do Banco

O sistema criará automaticamente as tabelas na primeira execução:

- **users**: Usuários do admin (admin/Silva#2021)
- **projects**: Projetos do portfólio

## Migrations

As migrations são executadas automaticamente na primeira inicialização do servidor.

