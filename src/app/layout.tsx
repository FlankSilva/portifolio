import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flank Silva | Senior Full Stack Developer',
  description:
    'Desenvolvedor Sênior especializado em React, React Native, Next.js e Node.js. Foco em performance, escalabilidade e código limpo. Experiência em aplicações Web e Mobile.',
  keywords: [
    'Full Stack Developer',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Desenvolvedor Sênior',
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
  ],
  authors: [{ name: 'Flank Silva' }],
  creator: 'Flank Silva',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://flanksilva.dev',
    title: 'Flank Silva | Senior Full Stack Developer',
    description:
      'Desenvolvedor Sênior especializado em React, React Native, Next.js e Node.js. Foco em performance e código limpo.',
    siteName: 'Flank Silva - Portfólio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flank Silva | Senior Full Stack Developer',
    description:
      'Desenvolvedor Sênior especializado em React, React Native, Next.js e Node.js. Foco em performance e código limpo.',
    creator: '@flanksilva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://flanksilva.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Flank Silva',
    jobTitle: 'Senior Full Stack Developer',
    description:
      'Desenvolvedor Sênior especializado em React, React Native, Next.js e Node.js. Foco em performance, escalabilidade e código limpo.',
    url: 'https://flanksilva.dev',
    sameAs: [
      'https://github.com/FlankSilva',
      'https://www.linkedin.com/in/flank-silva-0a3a5317a/',
      'https://www.youtube.com/@devjunior6354',
    ],
    knowsAbout: [
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'PHP',
      'Laravel',
      'Firebase',
      'PostgreSQL',
      'MySQL',
      'Docker',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Rocketseat',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
  }

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
