import { WarningCircle } from 'phosphor-react'
import { TextareaHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<FieldValues>
  name: string
  messageError?: any
}

export function TextArea({
  name,
  register,
  messageError,
  ...rest
}: TextAreaProps) {
  return (
    <div className="relative flex">
      <textarea
        className={`
          border-[1px]
          w-full
          rounded 
          bg-black-600
          text-zinc-150
          py-1
          px-3
          border-green-500
          outline-none 
          text-base 
          placeholder:text-zinc-200
      `}
        cols={30}
        rows={6}
        {...register(name)}
        {...rest}
      />
      {messageError && (
        <div className="absolute left-[calc(100%_-_30px)] top-2">
          <WarningCircle size={20} color="red" />
        </div>
      )}
    </div>
  )
}
