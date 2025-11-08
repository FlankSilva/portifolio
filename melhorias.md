# Prompt: Componente "Skills" — Cards + Barras de Domínio (Next.js + Tailwind)

Você é um engenheiro front-end sênior especializado em Next.js e Tailwind CSS.  
Sua tarefa: **gerar um componente de Skills** moderno, acessível e performático para o portfólio de Flank Silva. O componente deve comunicar rapidamente quais tecnologias ele domina, sem poluição visual — ideal para recrutadores e tech leads.

## Objetivos principais

1. Leitura imediata: visitantes devem ver em <2s quais tecnologias o candidato domina.
2. Visual profissional: minimal, espaçamento generoso, tipografia clara.
3. Interatividade elegante: microinterações suaves no mouse/foco.
4. Responsividade: mobile-first, grade que adapta para 1/2/3 colunas conforme largura.
5. Acessibilidade: contraste adequado, navegação por teclado, roles/aria.
6. Performance: sem imagens pesadas; usar SVGs inline ou ícones vetoriais; lazy-load quando fizer sentido.

## Estrutura de dados (exemplo)

Forneça o componente para consumir um array de skills com a seguinte forma:

```js
const skills = [
  {
    id: 'react',
    name: 'React',
    category: 'Front-end',
    level: 95, // 0-100
    short: 'Interfaces reativas, hooks, performance e patterns',
    details: 'Teste unitário, SSR/SSG com Next.js, otimizações de rendering',
    icon: '/icons/react.svg' // pode usar inline SVG também
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile',
    level: 90,
    short: 'Apps nativos com Expo/CLI, push e offline-first',
    details: 'Push notifications, geolocation, persistência local e publicação em lojas',
    icon: '/icons/react-native.svg'
  },
  ...
];
Requisitos do componente
Nome do componente: SkillsGrid (export default).

Props:

skills: Skill[] (obrigatório)

columns?: { sm: number, md: number, lg: number } (opcional; padrão { sm:1, md:2, lg:3 })

showDetailsOnHover?: boolean (padrão true)

Deve dividir visualmente por categorias (opcional): se houver mais de 6 entradas, mostre um filtro por categoria no topo (tabs simples).

Layout e classes Tailwind (sugestão)
Container externo:

html
Copiar código
<section aria-labelledby="skills-heading" className="max-w-7xl mx-auto px-6 py-12">
Heading:

html
Copiar código
<h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-white">Minhas Skills</h2>
<p className="mt-2 text-gray-400 max-w-2xl">Tecnologias e nível de domínio — foco em resultados práticos.</p>
Grid responsiva:

html
Copiar código
<div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
Card:

html
Copiar código
<article role="article" tabIndex="0" className="group bg-white/3 dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-cyan-400">
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 flex-none">{/* svg icon */}</div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      <p className="text-sm text-gray-400 mt-1">{skill.short}</p>
    </div>
    <div className="ml-3 text-sm text-gray-300">{skill.level}%</div>
  </div>

  <!-- barra de domínio -->
  <div className="mt-4">
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-2 bg-cyan-400 rounded-full" style={{ width: `${skill.level}%` }} />
    </div>
  </div>

  <!-- detalhes (hover / focus) -->
  <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
    {skill.details}
  </div>
</article>
Interações e animações
Hover: elevação sutil (-translate-y-1), sombra aumentada, e revelar details.

Focus (acessibilidade): outline-none + ring-2 ring-cyan-400.

Prefer prefer-reduced-motion: respeitar @media (prefers-reduced-motion: reduce) — sem animações nesse caso.

Opcional (avançado): usar Framer Motion para entradas (fade + slide-up) com initial/animate/exit. Se usado, fornecer fallback CSS sem JS.

Acessibilidade
Cada card deve ser tabIndex="0" e ter role="article" e aria-labelledby apontando para o título do card.

Barra de progresso: usar role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100" aria-label={${skill.name} proficiency}.

Imagens/ícones SVG com role="img" e aria-hidden se decorativo, ou aria-label se informativo.

Contraste mínimo de 4.5:1 para texto principal.

Recursos e ícones
Preferir SVGs inline (pequeno) ou sprite/ico.

Alternativa: usar react-icons (Feather / Simple Icons) se preferir não enviar SVGs.

Não carregar imagens raster grandes.

Comportamento Mobile
Cards empilhados (1 coluna) em sm.

Em telas médias: 2 colunas; em largas: 3 colunas.

Barra de domínio deve ser visível e ter altura adequada (h-2 a h-3).

Texto short limitado a 2 linhas (usar line-clamp-2).

Filtros e ordenação (opcional)
Se skills.length > 8, incluir controles: All | Front-end | Mobile | Back-end.

Ordenação por level decrescente por padrão.

Tests / QA checklist
 Navegação por teclado: tab para cada card, Enter/Space foca e mostra detalhes.

 Leitura por leitor de tela: titles e progressbar com labels.

 Lighthouse: evitar grandes mudanças no layout, imagens otimizadas, scripts mínimos.

 Responsividade: ver em 320/375/768/1024/1440 px.

 Prefer-reduced-motion: animações desabilitadas.

Exigências de entrega (o que quero do Cursor)
Arquivo React/TSX: components/SkillsGrid.tsx (tipagem com Skill interface).

Arquivo de estilos (se necessário): usar classes Tailwind apenas; nenhum CSS global complicado.

Opcional: data/skills.ts com o array de skills pré-preenchido com suas tecnologias principais (React, React Native, Next.js, Node.js, Tailwind, Docker, PostgreSQL, MySQL, Firebase, TypeScript).

Pequeno README na docstring do componente explicando props, exemplos de uso e como integrar no Next.js (import e uso no pages/index.tsx).

Se usar Framer Motion, explicar dependência e oferecer fallback puro CSS.

Texto / Copy (conteúdo a incluir por skill)
Para cada skill, inclua:

short: 1 linha, ex.: “Interfaces reativas, hooks e patterns de performance.”

details: 1–2 frases, ex.: “SSR/SSG com Next.js, otimização de render e testes unitários.”

Exemplo de entrada (dados do Flank)
Peça ao Cursor para pré-popular data/skills.ts com:

js
Copiar código
[
  { id: 'react', name: 'React', category: 'Front-end', level: 95, short: 'Interfaces reativas e performance', details: 'Hooks, Suspense, Server Components (Next.js), otimização de rendering', icon: '/icons/react.svg' },
  { id: 'next', name: 'Next.js', category: 'Front-end', level: 92, short: 'SSR, SSG e App Router', details: 'Roteamento, otimização de imagens, middlewares e SSG/ISR', icon: '/icons/next.svg' },
  { id: 'react-native', name: 'React Native', category: 'Mobile', level: 90, short: 'Apps nativos, publicação e push', details: 'Expo/CLI, geolocalização, offline-first e publicação em lojas', icon: '/icons/react-native.svg' },
  { id: 'node', name: 'Node.js', category: 'Back-end', level: 88, short: 'APIs, microservices e integração', details: 'Express, boas práticas, autenticação JWT e testes', icon: '/icons/node.svg' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Front-end', level: 93, short: 'UI utilitária e design system', details: 'Componentização, dark mode e responsive utilities', icon: '/icons/tailwind.svg' },
  { id: 'docker', name: 'Docker', category: 'DevOps', level: 80, short: 'Containerização de ambientes', details: 'Dockerfile, docker-compose e pipelines CI', icon: '/icons/docker.svg' }
]
Exemplo de uso (snippet de importação)
tsx
Copiar código
import SkillsGrid from '@/components/SkillsGrid';
import skills from '@/data/skills';

export default function Home() {
  return (
    <main>
      <SkillsGrid skills={skills} columns={{ sm:1, md:2, lg:3 }} />
    </main>
  );
}
Critérios de aceitação
O componente compila sem erros em Next.js + TypeScript.

Usa apenas Tailwind classes para estilo (evitar CSS externo a menos que necessário).

Acessível (labels, progress roles).

Mobile-friendly e performático.

Documentado com README pequeno na docstring.

Fim do prompt.
Gere o componente SkillsGrid.tsx, data/skills.ts (com as skills do Flank), e inclua um breve README/documentação no topo do arquivo explicando props, variante de colunas, e instruções para integrar ao Next.js.
Respeite prefers-reduced-motion e garanta fallback sem Framer Motion se preferir evitar dependências.
```
