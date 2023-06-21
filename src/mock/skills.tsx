import {
  CssIcon,
  DockerIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  SassIcon,
  TypeScriptIcon,
  YarnIcon,
} from '@/components/Icons/SoftSkills'

interface SkillsProps {
  size: '110' | '70'
}

export const skills = ({ size }: SkillsProps) => [
  {
    title: 'HTML',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <HTMLIcon size={size} />,
  },
  {
    title: 'CSS',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <CssIcon size={size} />,
  },
  {
    title: 'JAVASCRIPT',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <JavaScriptIcon size={size} />,
  },
  {
    title: 'SASS',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <SassIcon size={size} />,
  },
  {
    title: 'NODE',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <NodeIcon size={size} />,
  },
  {
    title: 'REACT',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <ReactIcon size={size} />,
  },
  {
    title: 'NEXTJS',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <NextjsIcon size={size} />,
  },
  {
    title: 'TYPESCRIPT',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <TypeScriptIcon size={size} />,
  },
  {
    title: 'YARN',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <YarnIcon size={size} />,
  },
  {
    title: 'DOCKER',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <DockerIcon size={size} />,
  },
  {
    title: 'POSTGRES',
    description: `
      HTML é uma linguagem de marcação usada para estruturar o conteúdo das 
      páginas da web. Ela usa tags para definir elementos como cabeçalhos, 
      parágrafos e imagens. Também permite criar links, adicionar estilos e 
      tornar as páginas interativas usando CSS e JavaScript. Em resumo, o 
      HTML é a base para exibir conteúdo na web.
    `,
    icon: <PostgresIcon size={size} />,
  },
]
