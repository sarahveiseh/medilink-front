import { FC, memo } from 'react'

export const Text: FC<IText> = memo(({ className, size, children, slot }) => {
  return (
    <span
      slot={slot}
      className={`${
        !className ||
        (!className.includes('text') && 'text-gray-600 dark:text-gray-400')
      } ${
        size === 'header'
          ? 'text-3xl'
          : size === 'title'
          ? 'text-2xl'
          : 'text-base'
      } ${className}`}
    >
      {children}
    </span>
  )
})
