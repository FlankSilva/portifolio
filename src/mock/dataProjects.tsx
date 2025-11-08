import imgSpotify from '@/assets/capa-spotify.png'
import imgDevStore from '@/assets/devstore.png'

export interface ProjectData {
  id: number
  name: string
  description: string
  stack: string
  link: string
  repoName: string
  repo: string
  image: any
}

export const dataProjects: ProjectData[] = [
  {
    id: 1,
    name: 'Spotify Clone',
    description:
      'Clone da interface de playlist do Spotify desenvolvido com Next.js e Tailwind CSS. Implementação de layout responsivo, animações suaves e otimização de performance com SSR.',
    stack: 'Next.js, React, TypeScript, Tailwind CSS',
    link: 'https://spotify-tailwind-omega.vercel.app/',
    repoName: '/FlankSilva/Spotify-Tailwind',
    repo: 'https://github.com/FlankSilva/Spotify-Tailwind',
    image: imgSpotify,
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description:
      'Plataforma de e-commerce completa com carrinho de compras, checkout e integração de pagamento. Desenvolvida com Next.js, incluindo otimizações de SEO e performance.',
    stack: 'Next.js, React, TypeScript, Tailwind CSS',
    link: 'https://devstore-tau.vercel.app/',
    repoName: '/FlankSilva/devstore',
    repo: 'https://github.com/FlankSilva/devstore',
    image: imgDevStore,
  },
]
