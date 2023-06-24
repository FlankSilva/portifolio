import { FieldValues, UseFormRegister } from 'react-hook-form'
import {
  Input as InputChakra,
  FormControl,
  InputProps as InputPropsChakra,
} from '@chakra-ui/react'

interface InputProps extends InputPropsChakra {
  register: UseFormRegister<FieldValues>
  name: string
}

export const Input = ({ name, register, ...rest }: InputProps) => {
  return (
    <FormControl>
      <InputChakra
        {...register(name)}
        border={'1px solid rgb(0, 173, 111)'}
        rounded={'none'}
        outline="none"
        fontSize={'1rem'}
        bg={'rgb(15, 15, 15)'}
        _placeholder={{
          color: '#95a5a6',
        }}
        _focus={{
          boxShadow: 'none',
          border: '1px solid rgb(0, 173, 111)',
        }}
        {...rest}
      />
    </FormControl>
  )
}
