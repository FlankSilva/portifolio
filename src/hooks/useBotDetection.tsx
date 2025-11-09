'use client'

import { useEffect, useRef, useState } from 'react'

interface BotDetectionResult {
  isBot: boolean
  honeypotValue: string
  fillTime: number
  hasHumanInteraction: boolean
  botScore: number
}

export function useBotDetection() {
  const [honeypotValue, setHoneypotValue] = useState('')
  const [hasHumanInteraction, setHasHumanInteraction] = useState(false)
  const startTimeRef = useRef<number>(Date.now())
  const interactionCountRef = useRef<number>(0)

  useEffect(() => {
    // Rastrear movimentos de mouse
    const handleMouseMove = () => {
      setHasHumanInteraction(true)
      interactionCountRef.current++
    }

    // Rastrear eventos de teclado
    const handleKeyPress = () => {
      setHasHumanInteraction(true)
      interactionCountRef.current++
    }

    // Rastrear cliques
    const handleClick = () => {
      setHasHumanInteraction(true)
      interactionCountRef.current++
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keypress', handleKeyPress)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const checkBot = (): BotDetectionResult => {
    const fillTime = Date.now() - startTimeRef.current
    const timeInSeconds = fillTime / 1000

    // Calcular score de bot (0-100, onde 100 = definitivamente bot)
    let botScore = 0

    // 1. Honeypot preenchido = bot definitivo
    if (honeypotValue.trim() !== '') {
      botScore = 100
    }

    // 2. Preenchido muito rápido (< 3 segundos) = suspeito
    if (timeInSeconds < 3) {
      botScore += 30
    }

    // 3. Sem interação humana = suspeito
    if (!hasHumanInteraction) {
      botScore += 40
    }

    // 4. Poucas interações (< 3) = suspeito
    if (interactionCountRef.current < 3) {
      botScore += 20
    }

    // 5. Preenchido extremamente rápido (< 1 segundo) = muito suspeito
    if (timeInSeconds < 1) {
      botScore += 50
    }

    const isBot = botScore >= 50 // Threshold: 50% de chance de ser bot

    return {
      isBot,
      honeypotValue,
      fillTime: Math.round(timeInSeconds),
      hasHumanInteraction,
      botScore: Math.min(100, botScore),
    }
  }

  return {
    honeypotValue,
    setHoneypotValue,
    checkBot,
    startTime: startTimeRef.current,
  }
}

