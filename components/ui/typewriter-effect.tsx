'use client'

import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      )
    }
  }, [isInView, animate])

  return (
    <motion.div
      ref={scope}
      className={cn('text-base sm:text-xl md:text-3xl font-bold', className)}
    >
      {words.map((word, idx) => {
        return (
          <motion.span
            key={`word-${idx}`}
            className={cn('opacity-0 hidden', word.className)}
          >
            {word.text}&nbsp;
          </motion.span>
        )
      })}
      <motion.span
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-[#2EE59D]',
          cursorClassName
        )}
      />
    </motion.div>
  )
} 