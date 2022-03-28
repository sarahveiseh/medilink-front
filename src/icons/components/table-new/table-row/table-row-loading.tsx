import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableRowLoading: FC<ITable> = memo(({ columns }) => {
  return (
    <div className="w-full row-start h-12 px-6">
      {columns.map((column, index) => (
        <div
          key={index}
          style={
            column.width ? undefined : { width: `${100 / columns.length}%` }
          }
          className={classNames(
            'flex flex-row items-end mx-1',
            index === columns.length - 1 ? ' justify-end' : 'justify-start',
            column.width
          )}
        >
          {column.head ? (
            <Fragment>
              <div
                className={classNames(
                  'h-5 w-2 rounded-xl bg-gray-300 dark:bg-gray-700'
                )}
              />
              <div
                className={classNames(
                  'h-3 w-2 rounded-xl ml-2 bg-gray-300 dark:bg-gray-700'
                )}
              />
              <div
                className={classNames(
                  'h-2 w-10 rounded-xl ml-2 bg-gray-300 dark:bg-gray-700'
                )}
              />
            </Fragment>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
})
