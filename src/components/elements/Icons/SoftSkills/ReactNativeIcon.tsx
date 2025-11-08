import { IconProps } from '@/utils/Interfaces'

export const ReactNativeIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
    >
      <path
        fill="#61DAFB"
        d="M78.8 10L64 14.8 49.2 10 20.4 19.6v88.8L64 118l43.6-9.6V19.6L78.8 10zM64 109.2L28.4 100V28l35.6 9.2L99.6 28v72l-35.6 9.2z"
      ></path>
      <path
        fill="#61DAFB"
        d="M64 37.2L28.4 28v72L64 109.2l35.6-9.2V28L64 37.2zm0 63.6L35.2 94.4V33.6L64 27.2l28.8 6.4v60.8L64 100.8z"
      ></path>
    </svg>
  )
}

