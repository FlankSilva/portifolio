'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { User, Lock, Eye, EyeSlash, WarningCircle } from 'phosphor-react'
import { Button } from '@/components/elements/Form/Button'

const loginSchema = z.object({
  username: z.string().min(1, 'Username é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Erro ao fazer login')
        return
      }

      // Redirecionar para o dashboard
      router.push('/admin/dashboard')
      router.refresh()
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-zinc-150 font-medium text-sm">
          Username
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-200">
            <User size={20} weight="regular" />
          </div>
          <input
            type="text"
            id="username"
            className={`w-full border-[1px] rounded bg-black-600 text-zinc-150 py-2.5 pl-10 pr-4 border-green-500 outline-none text-sm placeholder:text-zinc-200 focus:border-green-300 transition-colors ${
              errors.username ? 'border-red-400' : ''
            }`}
            placeholder="Type your username"
            {...register('username')}
          />
          {errors.username && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <WarningCircle size={20} color="#d63031" />
            </div>
          )}
        </div>
        {errors.username && (
          <span className="text-red-400 text-xs mt-1">{errors.username.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-zinc-150 font-medium text-sm">
          Password
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-200">
            <Lock size={20} weight="regular" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className={`w-full border-[1px] rounded bg-black-600 text-zinc-150 py-2.5 pl-10 pr-12 border-green-500 outline-none text-sm placeholder:text-zinc-200 focus:border-green-300 transition-colors ${
              errors.password ? 'border-red-400' : ''
            }`}
            placeholder="Type your password"
            {...register('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-200 hover:text-green-500 transition-colors z-10"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <EyeSlash size={20} weight="regular" /> : <Eye size={20} weight="regular" />}
          </button>
          {errors.password && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
              <WarningCircle size={20} color="#d63031" />
            </div>
          )}
        </div>
        {errors.password && (
          <span className="text-red-400 text-xs mt-1">{errors.password.message}</span>
        )}
      </div>

      {error && (
        <div className="bg-red-400 bg-opacity-10 border border-red-400 rounded p-3">
          <span className="text-red-400 text-sm">{error}</span>
        </div>
      )}

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full mt-2 py-3 text-base font-semibold uppercase tracking-wide"
      >
        {isLoading ? 'Entrando...' : 'Login'}
      </Button>
    </form>
  )
}

