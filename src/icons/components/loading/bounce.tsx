import { FC, useMemo } from 'react'
import { classNames } from 'utils/classes'

export const LoadingBounce: FC<{ size?: 'small' | 'large'; center?: boolean }> =
  ({ size = 'small', center = false }) => {
    const circleCommonClasses = useMemo(
      () =>
        size === 'large'
          ? 'h-5 w-5 bg-gray-400 rounded-full'
          : 'h-2 w-2 bg-gray-400 rounded-full',
      [size]
    )
    return (
      <div
        className={classNames('flex', center && 'justify-center')}
        data-testid="loading"
      >
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    )
  }
