import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { WarningCircle } from 'phosphor-react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>
  name: string
  messageError?: any
}

export function Input({ name, register, messageError, ...rest }: InputProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className={`
          w-full
          border-[1px] 
          rounded 
          bg-black-600
          text-zinc-150
          py-1
          px-3
          border-green-500
          outline-none 
          text-sm 
          placeholder:text-zinc-200
  
        `}
        {...rest}
        {...register(name)}
      />
      {messageError && (
        <div className="absolute left-[calc(100%_-_30px)]">
          <WarningCircle size={20} color="red" />
        </div>
      )}
    </div>
  )
}
