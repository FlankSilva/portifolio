'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/elements/Form/Input'
import { Button } from '@/components/elements/Form/Button'
import { TextArea } from '@/components/elements/Form/TextArea'
import Image from 'next/image'

const projectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  stack: z.string().min(1, 'Stack é obrigatória'),
  link: z.string().url('Link deve ser uma URL válida'),
  repoName: z.string().min(1, 'Nome do repositório é obrigatório'),
  repo: z
    .string()
    .min(1, 'Repositório é obrigatório')
    .refine((val) => val === '#' || val.startsWith('http'), {
      message: 'Repositório deve ser uma URL válida ou # para privado',
    }),
})

type ProjectFormData = z.infer<typeof projectSchema>

interface ProjectFormProps {
  projectId?: number
  initialData?: {
    name: string
    description: string
    stack: string
    link: string
    repoName: string
    repo: string
    imageUrl?: string | null
  }
}

export function ProjectForm({ projectId, initialData }: ProjectFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.imageUrl || null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData,
  })

  useEffect(() => {
    if (initialData) {
      setValue('name', initialData.name)
      setValue('description', initialData.description)
      setValue('stack', initialData.stack)
      setValue('link', initialData.link)
      setValue('repoName', initialData.repoName)
      setValue('repo', initialData.repo)
    }
  }, [initialData, setValue])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadImage = async (file: File): Promise<string> => {
    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/projects/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao fazer upload da imagem')
      }

      return result.imageUrl
    } finally {
      setUploadingImage(false)
    }
  }

  const onSubmit = async (data: ProjectFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      let imageUrl = initialData?.imageUrl || null

      // Fazer upload da imagem se houver nova
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const projectData = {
        ...data,
        imageUrl: imageUrl || '',
      }

      const url = projectId ? `/api/projects/${projectId}` : '/api/projects'
      const method = projectId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Erro ao salvar projeto')
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-2xl">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-green-500 font-semibold text-sm">
          Nome do Projeto *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          register={register}
          messageError={errors.name}
          placeholder="Ex: Spotify Clone"
        />
        {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-green-500 font-semibold text-sm">
          Descrição *
        </label>
        <TextArea
          id="description"
          name="description"
          register={register}
          messageError={errors.description}
          placeholder="Descreva o projeto..."
          rows={4}
        />
        {errors.description && (
          <span className="text-red-400 text-xs">{errors.description.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="stack" className="text-green-500 font-semibold text-sm">
          Stack Tecnológica *
        </label>
        <TextArea
          id="stack"
          name="stack"
          register={register}
          messageError={errors.stack}
          placeholder="Ex: Next.js, React, TypeScript, Tailwind CSS"
          rows={3}
        />
        {errors.stack && <span className="text-red-400 text-xs">{errors.stack.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="link" className="text-green-500 font-semibold text-sm">
          Link do Projeto *
        </label>
        <Input
          type="url"
          id="link"
          name="link"
          register={register}
          messageError={errors.link}
          placeholder="https://exemplo.com"
        />
        {errors.link && <span className="text-red-400 text-xs">{errors.link.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="repoName" className="text-green-500 font-semibold text-sm">
          Nome do Repositório *
        </label>
        <Input
          type="text"
          id="repoName"
          name="repoName"
          register={register}
          messageError={errors.repoName}
          placeholder="Ex: /FlankSilva/projeto ou Privado"
        />
        {errors.repoName && (
          <span className="text-red-400 text-xs">{errors.repoName.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="repo" className="text-green-500 font-semibold text-sm">
          URL do Repositório *
        </label>
        <Input
          type="url"
          id="repo"
          name="repo"
          register={register}
          messageError={errors.repo}
          placeholder="https://github.com/... ou # se for privado"
        />
        {errors.repo && <span className="text-red-400 text-xs">{errors.repo.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="text-green-500 font-semibold text-sm">
          Imagem do Projeto
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-green-500 rounded bg-black-600 text-zinc-150 py-1 px-3 outline-none text-sm"
        />
        {imagePreview && (
          <div className="mt-2 relative w-full h-48 rounded overflow-hidden border border-zinc-200">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {error && <span className="text-red-400 text-xs">{error}</span>}

      <div className="flex gap-4">
        <Button type="submit" isLoading={isLoading || uploadingImage}>
          {projectId ? 'Atualizar' : 'Criar'} Projeto
        </Button>
        <button
          type="button"
          onClick={() => router.push('/admin/dashboard')}
          className="border border-zinc-200 py-1 px-4 rounded hover:bg-black-800 transition-all duration-300"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

