import { FieldValues, UseFormRegister } from 'react-hook-form'
import {
  Textarea as TextAreaChakra,
  FormControl,
  TextareaProps as TextAreaPropsChakra,
} from '@chakra-ui/react'

interface TextAreaProps extends TextAreaPropsChakra {
  register: UseFormRegister<FieldValues>
  name: string
}

export const TextArea = ({ name, register, ...rest }: TextAreaProps) => {
  return (
    <FormControl>
      <TextAreaChakra
        {...register(name)}
        {...rest}
        border={'1px solid rgb(0, 173, 111)'}
        rounded={'none'}
        outline="none"
        fontSize={'1rem'}
        bg={'rgb(15, 15, 15)'}
        _focus={{
          boxShadow: 'none',
          border: '1px solid rgb(0, 173, 111)',
        }}
        _placeholder={{
          color: '#95a5a6',
        }}
        height={'222px'}
      />
    </FormControl>
  )
}
