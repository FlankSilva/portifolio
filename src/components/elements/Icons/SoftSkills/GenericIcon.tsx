import { IconProps } from '@/utils/Interfaces'

interface GenericIconProps extends IconProps {
  name: string
}

export const GenericIcon = ({ size, name }: GenericIconProps) => {
  const sizeNum = Number(size)
  const fontSize = sizeNum * 0.3

  return (
    <div
      className="flex items-center justify-center bg-black-900 rounded-lg text-green-500 font-bold text-center p-1"
      style={{
        width: size,
        height: size,
        fontSize: `${fontSize}px`,
      }}
    >
      {name.substring(0, 3).toUpperCase()}
    </div>
  )
}

