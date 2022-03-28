import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

import { TableCell } from '../table-cell'
import { TableRowLoading } from './table-row-loading'

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, loading, index, length, onRowClick }) => {
    return (
      <div
        className={classNames(
          'w-full flex flex-col overflow-hidden border-gray-300  dark:border-gray-800 text-sm',
          loading ? 'opacity-50 ' : 'group',
          index === length - 1 ? '' : 'border-b',
          index % 2 && 'bg-gray-50 ',
          onRowClick && 'cursor-pointer'
        )}
        onClick={() => onRowClick && onRowClick(item.original)}
      >
        {item ? (
          <div
            className={classNames(
              'w-full row-start h-12 px-6 hover:bg-blue-100'
            )}
          >
            {(columns || []).map((column, index) => (
              <TableCell
                key={index}
                item={item.original}
                index={index}
                column={column}
                columns={columns}
              />
            ))}
          </div>
        ) : (
          <TableRowLoading columns={columns} />
        )}
      </div>
    )
  }
)
