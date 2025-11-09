# Docker Compose - Desenvolvimento Local

Este projeto inclui um `docker-compose.yml` para facilitar o desenvolvimento local com PostgreSQL.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Como usar

### 1. Iniciar o banco de dados

```bash
docker-compose up -d
```

Isso irá:
- Criar um container PostgreSQL
- Criar o banco `portfolio_db`
- Expor na porta `5432`

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.local.example` para `.env.local`:

```bash
cp .env.local.example .env.local
```

O arquivo já vem configurado com a connection string para o Docker:
```
DATABASE_URL=postgresql://portfolio_user:portfolio_password@localhost:5432/portfolio_db
```

### 3. Executar o projeto

```bash
npm run dev
```

As migrations serão executadas automaticamente na primeira execução.

## Comandos úteis

### Parar o banco
```bash
docker-compose down
```

### Parar e remover volumes (apaga os dados)
```bash
docker-compose down -v
```

### Ver logs do banco
```bash
docker-compose logs -f postgres
```

### Acessar o banco via psql
```bash
docker-compose exec postgres psql -U portfolio_user -d portfolio_db
```

### Reiniciar o banco
```bash
docker-compose restart postgres
```

## Estrutura

- **Porta:** 5432
- **Usuário:** portfolio_user
- **Senha:** portfolio_password
- **Banco:** portfolio_db

## Produção

Para produção (Vercel + Render), use a `DATABASE_URL` do Render nas variáveis de ambiente da Vercel.

