import { ICCircleFill } from 'icons/circle-fill'
import { Link } from 'react-router-dom'
import { classNames } from 'utils/classes'

export type CardListItemData = {
  name: string
  kind: string
  // status: {
  //   text: string
  //   kind: 'wait' | 'finish' | 'error'
  // }
  icon: React.ReactNode
  cardIcon: any
  className?: string
  onClick?: any
}

export const CardItem = ({
  name,
  kind,
  icon,
  cardIcon,
  className = '',
  onClick = () => {},
}: CardListItemData) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-4 overflow-hidden border border-gray-300 rounded ${className}`}
    >
      <div className="flex gap-x-4">
        <div className="flex items-center justify-center w-10 h-10 p-2 text-2xl rounded-full shadow">
          {icon}
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="font-normal">{kind}</div>
        </div>
      </div>
      <div className="absolute w-32 h-32 opacity-20 -bottom-8 -right-8 text-9xl">
        {cardIcon}
      </div>
    </div>
  )
}
