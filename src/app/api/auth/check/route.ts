import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/utils/auth'

export async function GET() {
  try {
    const authenticated = await isAuthenticated()
    return NextResponse.json({ authenticated })
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error)
    return NextResponse.json({ authenticated: false })
  }
}

