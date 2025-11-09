# 📧 Configuração de Email

Este projeto suporta duas opções para envio de emails: **Resend** (recomendado) e **Gmail SMTP**.

## 🎯 Resend (Recomendado)

### Por que usar Resend?
- ✅ **100 emails/dia grátis** (suficiente para portfólio)
- ✅ Mais confiável que Gmail SMTP
- ✅ Melhor deliverability (emails chegam na caixa de entrada)
- ✅ API simples e moderna
- ✅ Popular na comunidade Next.js
- ✅ Sem necessidade de App Password

### Como configurar:

1. **Crie uma conta no Resend**
   - Acesse: https://resend.com
   - Faça login com GitHub ou Google

2. **Gere uma API Key**
   - No dashboard, vá em "API Keys"
   - Clique em "Create API Key"
   - Copie a chave gerada

3. **Configure as variáveis no `.env`**
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=seu-email@gmail.com
   ```

   **Nota:** 
   - `RESEND_FROM_EMAIL`: Use `onboarding@resend.dev` para testes (já vem configurado)
   - Para produção, verifique seu domínio no Resend e use um email do seu domínio
   - `RESEND_TO_EMAIL`: Email que receberá os contatos do portfólio

4. **Pronto!** O sistema usará Resend automaticamente.

---

## 📮 Gmail SMTP (Alternativa)

### Quando usar?
- Se você já tem um Gmail configurado
- Se preferir usar seu próprio email
- **Limitação:** Gmail pode bloquear após muitos envios

### Como configurar:

1. **Ative a verificação em duas etapas**
   - Acesse: https://myaccount.google.com/security
   - Ative "Verificação em duas etapas"

2. **Gere uma App Password**
   - Acesse: https://myaccount.google.com/apppasswords
   - Selecione "Email" e "Outro (nome personalizado)"
   - Digite "Portfolio" e clique em "Gerar"
   - **Copie a senha gerada** (16 caracteres)

3. **Configure as variáveis no `.env`**
   ```env
   USER_EMAIL=seu-email@gmail.com
   USER_EMAIL_PASS=sua-app-password-aqui
   ```

   **⚠️ IMPORTANTE:** Use a **App Password**, não sua senha normal do Gmail!

---

## 🔄 Prioridade

O sistema usa a seguinte prioridade:

1. **Resend** (se `RESEND_API_KEY`, `RESEND_FROM_EMAIL` e `RESEND_TO_EMAIL` estiverem configurados)
2. **Gmail SMTP** (se `USER_EMAIL` e `USER_EMAIL_PASS` estiverem configurados)

Se Resend estiver configurado mas falhar, o sistema tentará Gmail SMTP automaticamente.

---

## 🆓 Serviços Gratuitos Comparados

| Serviço | Plano Gratuito | Limitações |
|---------|---------------|------------|
| **Resend** | 100 emails/dia | Sem limite de tempo |
| **SendGrid** | 100 emails/dia | Apenas 60 dias |
| **Mailgun** | 5.000 emails/mês | Primeiros 3 meses |
| **Gmail SMTP** | Ilimitado* | Pode bloquear após muitos envios |

*Gmail SMTP não é recomendado para produção devido a limitações de rate limiting.

---

## 🐛 Troubleshooting

### Erro: "Missing credentials"
- Verifique se as variáveis estão no arquivo `.env`
- Reinicie o servidor após adicionar variáveis

### Erro: "Invalid login" (Gmail)
- Certifique-se de usar uma **App Password**, não a senha normal
- Verifique se a verificação em duas etapas está ativada

### Erro: "Email não configurado"
- Configure pelo menos uma das opções (Resend ou Gmail SMTP)
- Verifique se todas as variáveis necessárias estão preenchidas

---

## 📚 Links Úteis

- [Resend Documentation](https://resend.com/docs)
- [Resend Dashboard](https://resend.com/emails)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Next.js Email Guide](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

