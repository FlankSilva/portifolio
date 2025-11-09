import { WarningCircle } from 'phosphor-react'
import { TextareaHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister, Path } from 'react-hook-form'

interface TextAreaProps<T extends FieldValues = FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<T>
  name: Path<T>
  messageError?: any
  label?: string
  textAreaId?: string
}

export function TextArea<T extends FieldValues = FieldValues>({
  name,
  register,
  messageError,
  label,
  textAreaId,
  ...rest
}: TextAreaProps<T>) {
  const id = textAreaId || `textarea-${name}`

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-green-500 text-sm">
          {label}
        </label>
      )}
      <div className="relative flex">
        <textarea
          id={id}
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
    </div>
  )
}
