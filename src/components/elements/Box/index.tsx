import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <div className="w-full max-w-5xl ">{children}</div>
}
