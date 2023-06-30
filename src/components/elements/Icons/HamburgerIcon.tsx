import { IconProps } from '@/utils/Interfaces'

export const HamburgerIcon = ({ fill, size, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...rest}
    >
      <path d="M3 12L21 12"></path>
      <path d="M3 6L21 6"></path>
      <path d="M3 18L21 18"></path>
    </svg>
  )
}
