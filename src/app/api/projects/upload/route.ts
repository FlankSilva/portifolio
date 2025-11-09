import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/utils/auth'
import { uploadImage } from '@/utils/cloudinary'

export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('image') as File | null

    if (!file) {
      return NextResponse.json({ error: 'Nenhuma imagem fornecida' }, { status: 400 })
    }

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Arquivo deve ser uma imagem' }, { status: 400 })
    }

    // Validar tamanho (máximo 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'Imagem muito grande (máximo 5MB)' }, { status: 400 })
    }

    const imageUrl = await uploadImage(file)

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error)
    return NextResponse.json({ error: 'Erro ao fazer upload da imagem' }, { status: 500 })
  }
}

