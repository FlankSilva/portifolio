import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { WarningCircle } from "phosphor-react";

interface InputProps<T extends FieldValues = FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  messageError?: any;
  label?: string;
  inputId?: string;
}

export function Input<T extends FieldValues = FieldValues>({
  name,
  register,
  messageError,
  label,
  inputId,
  ...rest
}: InputProps<T>) {
  const id = inputId || `input-${name}`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-green-500 text-sm">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={id}
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
    </div>
  );
}
