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
} from '@/components/elements/Icons/SoftSkills'

interface SkillsProps {
  size: '100' | '70'
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
      CSS (Cascading Style Sheets) é uma linguagem usada para deixar as páginas 
      da web bonitas e bem organizadas. Com o CSS, é possível mudar cores, 
      fontes, tamanhos e espaçamentos dos elementos de uma página. 
      Ele ajuda a separar o conteúdo (HTML) da aparência (CSS), tornando mais 
      fácil de manter e reutilizar o estilo em várias páginas. Com o CSS, os 
      desenvolvedores podem criar layouts complexos, adaptar o design para 
      diferentes dispositivos e adicionar efeitos especiais às páginas. 
      Em resumo, o CSS é o que dá vida ao visual dos sites.
    `,
    icon: <CssIcon size={size} />,
  },
  {
    title: 'JAVASCRIPT',
    description: `
      JavaScript é uma linguagem de programação usada para tornar os sites 
      interativos. Com ele, os desenvolvedores podem criar elementos dinâmicos, 
      responder a eventos e interagir com os usuários. É executado no navegador 
      do usuário e permite a criação de recursos como formulários interativos, 
      animações e comunicação com servidores. É uma linguagem versátil, usada 
      tanto no frontend quanto no backend. Em resumo, o JavaScript deixa os 
      sites mais interativos e funcionais.
    `,
    icon: <JavaScriptIcon size={size} />,
  },
  {
    title: 'SASS',
    description: `
      Sass é uma linguagem de extensão do CSS que melhora a forma como 
      escrevemos estilos para sites. Ele adiciona recursos como variáveis, 
      aninhamento e mixins, simplificando a criação e a manutenção de estilos. 
      Com o Sass, é possível reutilizar código, organizar estilos de forma mais 
      clara e criar estilos dinâmicos. Ele precisa ser compilado em CSS antes 
      de ser usado. Resumidamente, o Sass é uma ferramenta que torna a escrita 
      de estilos mais eficiente e produtiva.
    `,
    icon: <SassIcon size={size} />,
  },
  {
    title: 'NODE',
    description: `
      Node.js é um ambiente de execução JavaScript que permite que o código 
      JavaScript seja executado no lado do servidor. Ele é baseado no motor V8 
      do Google Chrome e oferece recursos para criar aplicativos web e 
      servidores escaláveis. Em resumo, o Node.js é uma plataforma que permite 
      que o JavaScript seja executado no servidor, facilitando o 
      desenvolvimento de aplicativos web.
    `,
    icon: <NodeIcon size={size} />,
  },
  {
    title: 'REACT',
    description: `
      React.js é uma biblioteca JavaScript utilizada para construir interfaces 
      de usuário interativas e reativas. Ele permite a criação de componentes 
      reutilizáveis, que atualizam de forma eficiente apenas as partes 
      necessárias da página quando ocorrem mudanças nos dados. O React.js é 
      amplamente utilizado no desenvolvimento de aplicações web modernas e 
      responsivas. Em resumo, o React.js é uma biblioteca que simplifica a 
      criação de interfaces de usuário dinâmicas e eficientes.
    `,
    icon: <ReactIcon size={size} />,
  },
  {
    title: 'NEXTJS',
    description: `
      Next.js é um framework JavaScript de código aberto baseado no React.js. 
      Ele fornece recursos adicionais para facilitar o desenvolvimento de 
      aplicações web modernas e escaláveis. O Next.js permite a criação de 
      páginas estáticas ou dinâmicas, renderização no lado do servidor, 
      roteamento avançado, pré-renderização e suporte a APIs. É uma escolha 
      popular para construir aplicações web robustas e otimizadas para 
      desempenho. Em resumo, o Next.js é um framework que estende o React.js, 
      fornecendo recursos extras para o desenvolvimento de aplicações web 
      escaláveis e de alto desempenho.
    `,
    icon: <NextjsIcon size={size} />,
  },
  {
    title: 'TYPESCRIPT',
    description: `
        TypeScript é uma linguagem de programação desenvolvida pela Microsoft 
        que adiciona recursos de tipagem estática ao JavaScript. Ela permite 
        definir e validar os tipos de dados usados em um programa, tornando-o 
        mais seguro e fácil de manter. O TypeScript também fornece recursos 
        avançados, como interfaces, classes e herança, que facilitam o 
        desenvolvimento de aplicativos complexos. Em resumo, o TypeScript é uma 
        linguagem que adiciona tipagem estática ao JavaScript, tornando-o mais 
        seguro e poderoso para desenvolver aplicativos escaláveis.
    `,
    icon: <TypeScriptIcon size={size} />,
  },
  {
    title: 'YARN',
    description: `
      Yarn é um gerenciador de pacotes JavaScript criado pelo Facebook. 
      Ele oferece uma forma eficiente e confiável de instalar, gerenciar e 
      compartilhar dependências em projetos JavaScript. O Yarn é conhecido por 
      sua velocidade, paralelismo na instalação de pacotes e cache inteligente. 
      Resumindo, o Yarn é uma ferramenta utilizada para gerenciar as 
      dependências dos projetos JavaScript de maneira rápida e eficiente.
    `,
    icon: <YarnIcon size={size} />,
  },
  {
    title: 'DOCKER',
    description: `
      Docker é uma plataforma de código aberto que permite criar, implantar e 
      executar aplicativos em ambientes isolados chamados de contêineres. Ele 
      facilita a criação de ambientes de desenvolvimento consistentes e 
      portáteis, garantindo que os aplicativos funcionem de maneira consistente 
      em diferentes sistemas operacionais. O Docker simplifica o processo de 
      implantação de aplicativos, ao fornecer uma infraestrutura leve e 
      independente para executar e gerenciar contêineres. Em resumo, o Docker 
      é uma plataforma que permite criar e executar aplicativos em contêineres, 
      proporcionando portabilidade e consistência em diferentes ambientes.
    `,
    icon: <DockerIcon size={size} />,
  },
  {
    title: 'POSTGRES',
    description: `
      O PostgreSQL, também conhecido como Postgres, é um sistema de 
      gerenciamento de banco de dados relacional de código aberto. 
      Ele é conhecido por ser confiável, robusto e escalável, oferecendo 
      recursos avançados para armazenamento e recuperação de dados. O PostgreSQL 
      suporta consultas complexas, transações ACID (Atomicidade, Consistência, 
        Isolamento e Durabilidade) e possui recursos para garantir a segurança 
        dos dados. Em resumo, o PostgreSQL é um poderoso banco de dados 
        relacional de código aberto usado para armazenar, organizar e recuperar 
        dados de forma confiável.
    `,
    icon: <PostgresIcon size={size} />,
  },
]
