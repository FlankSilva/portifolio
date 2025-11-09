/**
 * Aplica máscara de telefone brasileiro
 * Formato: (XX) XXXXX-XXXX (celular) ou (XX) XXXX-XXXX (fixo)
 */
export function applyPhoneMask(value: string): string {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '')

  // Limita a 11 dígitos (celular com DDD)
  const limitedNumbers = numbers.slice(0, 11)

  // Aplica a máscara
  if (limitedNumbers.length <= 2) {
    return limitedNumbers ? `(${limitedNumbers}` : ''
  } else if (limitedNumbers.length <= 7) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`
  } else if (limitedNumbers.length <= 10) {
    // Telefone fixo: (XX) XXXX-XXXX
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`
  } else {
    // Celular: (XX) XXXXX-XXXX
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`
  }
}

