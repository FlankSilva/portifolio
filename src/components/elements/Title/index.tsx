import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="relative mt-[4rem] mb-[4rem]">
      <h1
        className={` ${orbitron.className} px-3 text-3xl md:text-5xl font-bold z-10 text-zinc-50`}
      >
        {title}
      </h1>
    </div>
  )
}
