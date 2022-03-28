import { classNames } from 'utils/classes'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const MenuItem = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={classNames(
        'flex-grow w-full px-4 py-3 text-left transition rounded hover:bg-blue-400 hover:text-white hover:shadow-lg whitespace-nowrap',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
