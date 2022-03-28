import _ from 'lodash'
import { FC } from 'react'

type Props = {
  times: number
}

export const Loader: FC<Props> = ({ times }) => {
  return (
    <>
      {_.times(times, (index) => (
        <span
          key={index}
          className="animate-pulse bg-gray-200 rounded h-12 w-48"
        />
      ))}
    </>
  )
}
