'use client'

import { motion } from 'framer-motion'
import { LoginForm } from '@/components/admin/LoginForm'
import { getAnimationVariants, fadeIn, slideUp } from '@/utils/animations'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(slideUp)}
        className="w-full max-w-md"
      >
        <div className="bg-black-600 rounded-lg p-10 border border-zinc-200">
          <LoginForm />
        </div>
      </motion.div>
    </div>
  )
}

