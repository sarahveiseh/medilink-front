import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import styled from 'styled-components'

const ColWrapper = styled.div`
  a {
    color: ${({ isLink }) => (isLink ? '#1b57b8' : '#333')};
  }
  a:hover {
    color: ${({ isLink }) => (isLink ? '#0053da;' : '#333')};
  }
`

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    return (
      <ColWrapper
        isLink={column?.isLink}
        style={column.width ? undefined : { width: `${100 / columns.length}%` }}
        className={classNames(
          'flex items-center mx-1',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width && column.width + ' truncate '
        )}
      >
        {column.render ? (
          column.render(item)
        ) : (
          <span className={classNames('text-gray-800 dark:text-gray-100')}>
            {item[column.accessor]}
          </span>
        )}
      </ColWrapper>
    )
  }
)
