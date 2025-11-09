import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loading } from '../../Loading'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

export function Button({ children, isLoading = false, className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`border-[1px] border-green-500 py-1 px-4 rounded hover:bg-green-300 bg-green-500 transition-all duration-300 flex justify-center ${
        isLoading && 'pointer-events-none'
      } ${className}`}
      {...rest}
    >
      {isLoading ? <Loading /> : children}
    </button>
  )
}
