import { Input } from 'components/input'
import { FC } from 'react'
import { Loader } from './loader'

type Props = {
  title: string
  elements: string[]
  isLoading: boolean
  times?: number
}

export const ValueList: FC<Props> = ({
  title,
  elements,
  isLoading,
  times = 20,
}) => {
  return (
    <div className="space-y-3">
      <div className="font-bold">{title}</div>
      <div className="flex flex-wrap gap-6">
        {isLoading ? (
          <Loader times={times} />
        ) : (
          <Elements elements={elements} />
        )}
      </div>
    </div>
  )
}

const Elements: FC<{ elements: string[] }> = ({ elements }) => {
  if (elements.length === 0)
    return <span className="font-bold text-xs text-gray-500">No Item</span>

  return (
    <>
      {elements?.map((element, index) => (
        <div key={index} className="w-48">
          <Input disabled className="bg-disabledInput" value={element} />
        </div>
      ))}
    </>
  )
}
