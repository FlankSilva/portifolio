import { IconProps } from '@/utils/Interfaces'

export const DownloadIcon = ({ fill = '#000', size, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        fill={fill}
        d="M12 15.577l-3.539-3.538a1 1 0 00-1.414 1.415l4.243 4.243a1 1 0 001.414 0l4.243-4.243a1 1 0 00-1.414-1.415L12 15.577z"
      />
      <path
        fill={fill}
        d="M12 2a1 1 0 011 1v11a1 1 0 11-2 0V3a1 1 0 011-1z"
      />
      <path
        fill={fill}
        d="M3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
    </svg>
  )
}

