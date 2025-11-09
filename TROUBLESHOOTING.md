# Troubleshooting - Projetos não aparecem em produção

## Checklist de Verificação

### 1. Verificar Variáveis de Ambiente na Vercel

Certifique-se de que a variável `DATABASE_URL` está configurada corretamente:

1. Acesse o dashboard da Vercel
2. Vá em **Settings** → **Environment Variables**
3. Verifique se `DATABASE_URL` está presente e configurada
4. **IMPORTANTE**: Use a **External Database URL** do Render (não a Internal!)
5. Formato esperado: `postgresql://user:password@host:port/database`

### 2. Verificar Logs da Vercel

1. Acesse o dashboard da Vercel
2. Vá em **Deployments** → Selecione o último deploy
3. Clique em **Functions** → `/api/projects/public`
4. Verifique os logs para erros como:
   - `DATABASE_URL não está configurado`
   - `relation "projects" does not exist`
   - Erros de conexão SSL
   - Erros de autenticação

### 3. Verificar se as Migrations Foram Executadas

Os logs devem mostrar:

- `🔄 Iniciando migrations...`
- `✅ Tabela users criada/verificada`
- `✅ Tabela projects criada/verificada`
- `✅ Usuário admin criado`
- `✅ X projetos migrados para o banco`
- `✅ Migrations executadas com sucesso`

Se não aparecerem, as migrations não foram executadas.

### 4. Verificar se o Banco de Dados Tem Projetos

1. Acesse o dashboard do Render
2. Vá no seu banco PostgreSQL
3. Clique em **Connect** ou use um cliente SQL
4. Execute: `SELECT COUNT(*) FROM projects;`
5. Se retornar 0, o banco está vazio

### 5. Testar a API Diretamente

Acesse no navegador ou use curl:

```
https://seu-dominio.vercel.app/api/projects/public
```

Deve retornar:

```json
{
  "projects": [...]
}
```

Se retornar erro, verifique os logs da Vercel.

### 6. Verificar Console do Navegador

1. Abra o DevTools (F12)
2. Vá na aba **Console**
3. Verifique se há erros como:
   - `Erro na resposta da API: 500`
   - `Erro ao carregar projetos`
   - `Nenhum projeto encontrado na API`

### 7. Problemas Comuns e Soluções

#### Problema: "DATABASE_URL não está configurado"

**Solução**: Adicione a variável `DATABASE_URL` nas configurações da Vercel

#### Problema: "relation 'projects' does not exist"

**Solução**: As migrations não foram executadas. Faça um novo deploy ou reinicie o servidor

#### Problema: "SSL connection error"

**Solução**: Verifique se a `DATABASE_URL` está usando SSL corretamente. O código já trata isso automaticamente para Render

#### Problema: Banco vazio (0 projetos)

**Solução**:

1. Acesse `/admin/login` (admin / Silva#2021)
2. Vá em `/admin/dashboard`
3. Adicione projetos manualmente ou verifique se as migrations populam o banco

#### Problema: API retorna array vazio `{projects: []}`

**Solução**:

1. Verifique se há projetos no banco (passo 4)
2. Se não houver, adicione via admin panel
3. Se houver, verifique os logs da API para erros

### 8. Forçar Execução das Migrations

Se as migrations não foram executadas:

1. Faça um novo deploy na Vercel
2. Ou acesse qualquer rota de API que use o banco (isso força a execução)
3. Verifique os logs para confirmar

### 9. Verificar Render Database

1. Acesse o dashboard do Render
2. Verifique se o banco está **Running** (não pausado)
3. Verifique se a **External Database URL** está correta
4. Teste a conexão usando um cliente SQL

### 10. Contato e Suporte

Se nenhuma das soluções acima funcionar:

1. Copie os logs completos da Vercel (Functions → `/api/projects/public`)
2. Copie os logs do Render (se houver)
3. Verifique o console do navegador para erros do frontend
4. Documente o problema com essas informações


