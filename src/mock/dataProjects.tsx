import imgSpotify from '@/assets/capa-spotify.png'
import imgDevStore from '@/assets/devstore.png'
import imgMecanico24 from '@/assets/mecanico24.png'

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
    id: 3,
    name: 'Mecânico 24h',
    description:
      'Plataforma web que conecta usuários a oficinas e mecânicos 24 horas em todo o Brasil. Permite que mecânicos criem perfis, usuários busquem por localização (estado/cidade), sistema de assinaturas para mecânicos, autenticação múltipla (email/senha, Google OAuth, WhatsApp OTP), upload de documentos, integração com mapas e sistema de pagamentos. Funciona como um diretório de oficinas de plantão e socorro mecânico.',
    stack:
      'Backend: NestJS 11.x, TypeScript 5.x, Prisma 6.x, PostgreSQL, JWT, Passport.js, Stripe, Asaas, Cloudinary, Twilio, Nodemailer, Google Maps API | Frontend: Next.js 15.2.1, React 19.x, TypeScript 5.x, Tailwind CSS 3.x, NextAuth.js 4.x, Zustand, React Query, React Hook Form, Zod, PrimeReact, Framer Motion, Stripe.js, Jest, Cypress | Deploy: Render.com (Backend), Vercel (Frontend)',
    link: 'https://www.mecanico24h.com.br/',
    repoName: 'Privado',
    repo: '#',
    image: imgMecanico24,
  },
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
