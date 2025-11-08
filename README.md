# Portfólio - Flank Silva

Portfólio pessoal desenvolvido com Next.js 13, TypeScript e Tailwind CSS, apresentando projetos, habilidades e informações de contato.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Next.js 13.4.7](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript 5.1.3](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 3.3.2](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[Phosphor Icons](https://phosphoricons.com/)** - Biblioteca de ícones
- **[Nodemailer](https://nodemailer.com/)** - Envio de emails

## 📁 Estrutura do Projeto

```
portifolio/
├── src/
│   ├── app/                    # Rotas e páginas (Next.js App Router)
│   │   ├── api/               # API Routes
│   │   │   └── send-email/    # Endpoint para envio de emails
│   │   ├── layout.tsx         # Layout raiz da aplicação
│   │   ├── page.tsx           # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/
│   │   ├── elements/          # Componentes reutilizáveis
│   │   │   ├── About/         # Seção sobre
│   │   │   ├── Box/           # Container com largura máxima
│   │   │   ├── Contact/       # Formulário de contato
│   │   │   ├── Drawer/        # Menu lateral mobile
│   │   │   ├── Footer/        # Rodapé
│   │   │   ├── Form/          # Componentes de formulário
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   └── TextArea/
│   │   │   ├── Header/        # Cabeçalho com navegação
│   │   │   ├── Icons/         # Ícones SVG customizados
│   │   │   ├── Loading/       # Componente de loading
│   │   │   ├── Logo/          # Logo do portfólio
│   │   │   ├── Presentation/  # Seção de apresentação
│   │   │   ├── Projects/      # Seção de projetos
│   │   │   ├── Skills/        # Seção de habilidades
│   │   │   └── Title/         # Título de seção
│   │   └── modules/
│   │       └── HomePage/      # Módulo da página inicial
│   ├── hooks/                 # Hooks e contextos
│   │   ├── MenuContext.tsx    # Contexto do menu
│   │   ├── ScrollToDivContext.tsx  # Contexto de scroll
│   │   └── index.tsx         # Provider principal
│   ├── utils/                 # Utilitários
│   │   ├── Interfaces.tsx     # Interfaces TypeScript compartilhadas
│   │   ├── nodemailer.ts      # Configuração do Nodemailer
│   │   └── validateForm.tsx   # Schemas de validação Zod
│   ├── mock/                  # Dados mockados
│   │   ├── dataProjects.tsx   # Dados dos projetos
│   │   ├── menuListMock.tsx   # Itens do menu
│   │   └── skills.tsx         # Dados das habilidades
│   ├── assets/                # Imagens e recursos estáticos
│   └── env/                   # Validação de variáveis de ambiente
│       └── index.ts
├── public/                    # Arquivos públicos estáticos
├── .cursorrules              # Regras do projeto para Cursor
├── next.config.js            # Configuração do Next.js
├── tailwind.config.js        # Configuração do Tailwind CSS
├── tsconfig.json             # Configuração do TypeScript
└── package.json              # Dependências do projeto
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- Yarn (recomendado) ou npm

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/FlankSilva/portifolio.git
cd portifolio
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
USER_EMAIL=seu-email@gmail.com
USER_EMAIL_PASS=sua-senha-de-app
```

**Nota**: Para Gmail, você precisará gerar uma "Senha de app" nas configurações da sua conta Google.

4. Execute o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📜 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria build de produção
- `yarn start` - Inicia o servidor de produção (após build)
- `yarn lint` - Executa o linter ESLint

## 🎨 Design e Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**, garantindo uma experiência otimizada em todos os dispositivos.

### Breakpoints Tailwind

- **sm**: 640px (pequenos tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (desktops grandes)

### Cores Customizadas

O projeto utiliza uma paleta de cores customizada definida no `tailwind.config.js`:

- **Preto**: `black-950`, `black-900`, `black-800`, `black-600`, `black-500`
- **Zinc**: `zinc-50`, `zinc-100`, `zinc-150`, `zinc-200`
- **Verde**: `green-200`, `green-300`, `green-500`
- **Vermelho**: `red-400`

### Dimensões de Projetos

- Largura: 1430px
- Altura: 810px

## 🔧 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Formulário de contato com validação
- ✅ Envio de emails via API Route
- ✅ Carrossel de projetos com auto-play
- ✅ Seção de habilidades expansível
- ✅ Menu mobile com drawer
- ✅ Animações e transições suaves
- ✅ Otimização de imagens com Next.js Image

## 📝 Validação de Formulários

O formulário de contato utiliza **React Hook Form** com **Zod** para validação:

- Nome: obrigatório
- Email: formato de email válido
- Assunto: obrigatório
- Mensagem: obrigatória

## 🌐 Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias (definidas em `.env.local`):

- `USER_EMAIL`: Email do remetente (Gmail)
- `USER_EMAIL_PASS`: Senha de app do Gmail

**Importante**: As variáveis são validadas com Zod no arquivo `src/env/index.ts`.

## 📦 Dependências Principais

```json
{
  "next": "13.4.7",
  "react": "18.2.0",
  "typescript": "5.1.3",
  "tailwindcss": "3.3.2",
  "react-hook-form": "^7.45.1",
  "zod": "^3.21.4",
  "nodemailer": "^6.9.3",
  "phosphor-react": "^1.4.1"
}
```

## 🚀 Deploy

O projeto está configurado para deploy em plataformas como Vercel, Netlify ou qualquer plataforma que suporte Next.js.

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente na dashboard da Vercel
3. Deploy automático a cada push

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

**Flank Silva**

- LinkedIn: [flank-silva-0a3a5317a](https://www.linkedin.com/in/flank-silva-0a3a5317a/)
- GitHub: [FlankSilva](https://github.com/FlankSilva)
- YouTube: [@devjunior6354](https://www.youtube.com/@devjunior6354)
- Email: flank.silva.0@gmail.com

## 🙏 Agradecimentos

- Next.js pela excelente documentação
- Comunidade React/Next.js pelo suporte
- Todos os mantenedores das bibliotecas utilizadas

---

Desenvolvido com ❤️ por Flank Silva
