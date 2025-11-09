# 📮 Configuração Rápida - Gmail SMTP

Guia passo a passo para configurar o envio de emails usando Gmail SMTP.

## ⚡ Passo a Passo (5 minutos)

### 1️⃣ Ative a Verificação em Duas Etapas

1. Acesse: https://myaccount.google.com/security
2. Procure por **"Verificação em duas etapas"**
3. Clique e ative (se ainda não estiver ativada)
   - Você precisará confirmar com seu telefone

### 2️⃣ Gere uma App Password

1. Acesse: https://myaccount.google.com/apppasswords
   - Se não aparecer, você precisa ativar a verificação em duas etapas primeiro

2. Configure a App Password:
   - **App:** Selecione "Email"
   - **Device:** Selecione "Outro (nome personalizado)"
   - Digite: `Portfolio`
   - Clique em **"Gerar"**

3. **Copie a senha gerada** (16 caracteres, pode ter espaços - pode remover os espaços)
   - Exemplo: `abcd efgh ijkl mnop` → use `abcdefghijklmnop`

### 3️⃣ Configure no Projeto

1. Abra o arquivo `.env` na raiz do projeto

2. Adicione as variáveis:
   ```env
   USER_EMAIL=seu-email@gmail.com
   USER_EMAIL_PASS=abcdefghijklmnop
   ```
   
   **Substitua:**
   - `seu-email@gmail.com` pelo seu email do Gmail
   - `abcdefghijklmnop` pela App Password que você copiou

3. **Salve o arquivo**

4. **Reinicie o servidor Next.js**
   - Pare o servidor (Ctrl+C) e inicie novamente (`npm run dev`)

### 4️⃣ Teste

1. Acesse seu portfólio
2. Vá na seção de contato
3. Preencha o formulário
4. Envie uma mensagem de teste
5. Verifique seu email (incluindo spam)

---

## ✅ Pronto!

Agora os emails do formulário de contato serão enviados para o seu Gmail automaticamente.

---

## 🐛 Problemas Comuns

### ❌ "Missing credentials"
- Verifique se as variáveis estão no arquivo `.env`
- Certifique-se de que não há espaços extras
- Reinicie o servidor após adicionar as variáveis

### ❌ "Invalid login" (535)
- **Use a App Password, não sua senha normal do Gmail**
- Verifique se a verificação em duas etapas está ativada
- Tente gerar uma nova App Password

### ❌ "Email não configurado"
- Verifique se `USER_EMAIL` e `USER_EMAIL_PASS` estão no `.env`
- Certifique-se de que os valores estão corretos (sem aspas)

---

## 📝 Exemplo de `.env`

```env
# Gmail SMTP
USER_EMAIL=flank.silva.0@gmail.com
USER_EMAIL_PASS=abcd efgh ijkl mnop

# Outras variáveis (se tiver)
DATABASE_URL=...
```

**Nota:** Você pode remover os espaços da App Password ou deixar com espaços, ambos funcionam.

---

## 🔗 Links Úteis

- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Gmail Security Settings](https://myaccount.google.com/security)
- [Suporte do Gmail](https://support.google.com/mail)

---

**Dica:** Se você não quiser usar Gmail SMTP, também pode usar Resend (veja `EMAIL_SETUP.md`).

