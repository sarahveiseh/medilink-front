import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { TableHeadSort } from './table-head-sort'

export const TableHead: FC<ITableHead> = memo(
  ({ columns, loading, toggleSortBy }) => {
    return (
      <div className="w-full flex flex-col">
        <div
          className={classNames(
            'w-full row-start  py-4 px-6  rounded-t border-b-2  border-secondary dark:border-primary',
            loading && 'animate-pulse200'
          )}
        >
          {(columns || []).map((column, index) => (
            <div
              style={
                column.width ? undefined : { width: `${100 / columns.length}%` }
              }
              className={classNames(
                'flex items-center ',
                index === columns.length - 1 ? ' justify-end' : 'justify-start',
                column.width
              )}
              key={index}
            >
              <div className="flex items-end space-x-2">
                <span
                  className={classNames('text-secondary dark:text-primary')}
                >
                  {column.head}
                </span>

                {column.sortable && (
                  <TableHeadSort toggleSortBy={toggleSortBy} column={column} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
