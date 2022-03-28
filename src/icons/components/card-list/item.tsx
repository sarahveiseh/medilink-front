import { Button } from 'components/button'
import { ICCircleFill } from 'icons/circle-fill'
import { Link } from 'react-router-dom'
import { classNames } from 'utils/classes'

export type CardListItemData = {
  name: string
  kind: string | React.ReactNode
  status: {
    text: string
    color: CardStatusColor
    link?: string
  }
  icon: React.ReactNode
  linkTo: string
}

export type CardStatusColor = 'gray' | 'green' | 'red' | 'yellow'

type Props = {
  data: CardListItemData
}

export const Item = ({ data }: Props) => {
  return (
    <Link
      to={data.linkTo}
      className="hover:text-current hover:bg-gray-50 focus:text-current"
    >
      <div className="relative p-4 overflow-hidden border border-gray-300 rounded">
        <div className="flex gap-x-4">
          <div className="flex items-center flex-shrink-0 justify-center w-10 h-10 p-2 text-2xl rounded-full shadow">
            {data.icon}
          </div>
          <div className="w-5/6">
            <div className="font-bold truncate ">{data.name}</div>
            <div className="font-normal truncate ">{data.kind}</div>
          </div>
        </div>
        <div className="absolute w-32 h-32 opacity-20 -bottom-8 -right-8 text-9xl">
          {data.icon}
        </div>
        <div className="flex justify-end">
          <Link to={data?.status?.link}>
            <Button
              disabled={
                !data?.status?.link || data?.status?.link?.includes('undefined')
              }
              className={classNames(
                'relative flex items-center justify-end ml-auto bg-opacity-75 transition rounded-full gap-x-2 px-1',
                data.status.color === 'gray' &&
                  'text-gray-500 hover:border hover:border-gray-500 hover:font-medium bg-gray-50',
                data.status.color === 'green' &&
                  'text-green-500 hover:border hover:border-green-500 hover:font-medium bg-green-50',
                data.status.color === 'red' &&
                  'text-red-500 hover:border hover:border-red-500 hover:font-medium bg-red-50',
                data.status.color === 'yellow' &&
                  'text-yellow-500 hover:border hover:yellow-gray-500 hover:font-medium bg-yellow-50'
              )}
            >
              <ICCircleFill className={`w-2 h-2 `} />
              {data.status.text}
            </Button>
          </Link>
          {/* <div
            className={classNames(
              'relative flex items-center justify-end ml-auto bg-opacity-75 rounded-full gap-x-2 px-1',
              data.status.color === 'gray' && 'text-gray-500 bg-gray-50',
              data.status.color === 'green' && 'text-green-500 bg-green-50',
              data.status.color === 'red' && 'text-red-500 bg-red-50',
              data.status.color === 'yellow' && 'text-yellow-500 bg-yellow-50'
            )}
          >
            <ICCircleFill className="w-2 h-2" />
            {data.status.text}
          </div> */}
        </div>
      </div>
    </Link>
  )
}
