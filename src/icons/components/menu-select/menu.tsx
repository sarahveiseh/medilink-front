import { classNames } from 'utils/classes'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Menu = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        'absolute rounded p-1 z-40 bg-white shadow-lg flex flex-col text-sm right-0 min-w-[160px] mt-2 border border-gray-100 max-h-[70vh] overflow-y-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
