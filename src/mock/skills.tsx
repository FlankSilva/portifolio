import {
  CssIcon,
  DockerIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  ReactNativeIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
  YarnIcon,
  GenericIcon,
  ExpressIcon,
  LaravelIcon,
  FirebaseIcon,
  SqliteIcon,
} from "@/components/elements/Icons/SoftSkills";

interface SkillsProps {
  size: "100" | "70";
}

export const skills = ({ size }: SkillsProps) => [
  // ⚙️ Frontend (Web & Mobile)
  {
    title: "REACT",
    description: "Hooks, Context API, componentização, reuso, design system",
    icon: <ReactIcon size={size} />,
    url: "https://react.dev",
  },
  {
    title: "NEXTJS",
    description: "SSR, SSG, App Router, integração com backend, performance",
    icon: <NextjsIcon size={size} />,
    url: "https://nextjs.org",
  },
  {
    title: "REACT NATIVE",
    description:
      "Arquitetura, navegação, armazenamento local, push notifications, offline first, geolocalização",
    icon: <ReactNativeIcon size={size} />,
    url: "https://reactnative.dev",
  },
  {
    title: "TYPESCRIPT",
    description:
      "Tipagem estática, interfaces, generics, integração com React/Node",
    icon: <TypeScriptIcon size={size} />,
    url: "https://www.typescriptlang.org",
  },
  {
    title: "TAILWIND CSS",
    description:
      "Estilização utilitária, componentização, design system, dark mode",
    icon: <TailwindIcon size={size} />,
    url: "https://tailwindcss.com",
  },
  {
    title: "SASS",
    description: "Modularização, variáveis, mixins, organização de estilos",
    icon: <SassIcon size={size} />,
    url: "https://sass-lang.com",
  },
  {
    title: "CSS3",
    description:
      "Estilização moderna, animações, flexbox, grid, responsividade",
    icon: <CssIcon size={size} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    title: "HTML5",
    description: "Semântica, acessibilidade e boas práticas",
    icon: <HTMLIcon size={size} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    title: "JAVASCRIPT",
    description: "ES6+, async/await, Promises, padrões modernos",
    icon: <JavaScriptIcon size={size} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  // 🧩 Backend & APIs
  {
    title: "NODE.JS",
    description: "Fundamentos, criação e integração de APIs REST",
    icon: <NodeIcon size={size} />,
    url: "https://nodejs.org",
  },
  {
    title: "EXPRESS.JS",
    description: "Middlewares, rotas, autenticação, integração com banco",
    icon: <ExpressIcon size={size} name="Express" />,
    url: "https://expressjs.com",
  },
  {
    title: "PHP / LARAVEL",
    description: "MVC, rotas, Eloquent ORM, autenticação, views",
    icon: <LaravelIcon size={size} name="Laravel" />,
    url: "https://laravel.com",
  },
  {
    title: "FIREBASE",
    description: "Auth, Firestore, Storage, Cloud Functions",
    icon: <FirebaseIcon size={size} name="Firebase" />,
    url: "https://firebase.google.com",
  },
  // 🗄️ Banco de Dados
  {
    title: "MYSQL",
    description: "Modelagem, joins, procedures, views",
    icon: <GenericIcon size={size} name="MySQL" />,
    url: "https://www.mysql.com",
  },
  {
    title: "POSTGRESQL",
    description: "Consultas otimizadas e relacionamentos",
    icon: <PostgresIcon size={size} />,
    url: "https://www.postgresql.org",
  },
  {
    title: "SQLITE",
    description: "Uso local em apps mobile",
    icon: <SqliteIcon size={size} name="SQLite" />,
    url: "https://www.sqlite.org",
  },
  // 🚀 DevOps e Infraestrutura
  {
    title: "DOCKER",
    description: "Containers, docker-compose, deploy de aplicações full stack",
    icon: <DockerIcon size={size} />,
    url: "https://www.docker.com",
  },
  {
    title: "GIT / GITHUB",
    description: "Versionamento, branches, PRs e code review",
    icon: <GenericIcon size={size} name="Git" />,
    url: "https://github.com",
  },
  {
    title: "CI/CD",
    description: "Deploys automatizados (Vercel, Netlify, GitHub Actions)",
    icon: <GenericIcon size={size} name="CI/CD" />,
    url: "https://github.com/features/actions",
  },
  {
    title: "VERCEL",
    description: "Deploy e versionamento de apps web/mobile",
    icon: <GenericIcon size={size} name="Vercel" />,
    url: "https://vercel.com",
  },
  {
    title: "LINUX / CLI",
    description: "Navegação, permissões, scripts de automação simples",
    icon: <GenericIcon size={size} name="Linux" />,
    url: "https://www.linux.org",
  },
  // 🧱 Arquitetura e Boas Práticas
  {
    title: "CLEAN CODE",
    description: "Código limpo, modular, testável",
    icon: <GenericIcon size={size} name="Clean" />,
    url: "https://github.com/ryanmcdermott/clean-code-javascript",
  },
  {
    title: "PERFORMANCE",
    description: "Lazy loading, memoization, otimização de assets",
    icon: <GenericIcon size={size} name="Perf" />,
    url: "https://web.dev/performance",
  },
  // 🧪 Testes e Qualidade
  {
    title: "JEST",
    description: "Testes automatizados (React Native / Jest / Testing Library)",
    icon: <GenericIcon size={size} name="Jest" />,
    url: "https://jestjs.io",
  },
  {
    title: "ESLINT",
    description: "Linting & Formatação (ESLint, Prettier)",
    icon: <GenericIcon size={size} name="ESLint" />,
    url: "https://eslint.org",
  },
  // Ferramentas
  {
    title: "YARN",
    description: "Gerenciamento de dependências e scripts de build",
    icon: <YarnIcon size={size} />,
    url: "https://yarnpkg.com",
  },
];
