import { FC, memo, useMemo } from 'react'
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import { classNames } from 'utils/classes'
import { TableBody } from './table-body'
import { TablePagination } from './table-pagination'
import { TableToolbar } from './table-toolbar'

const globalFilter = (rows, columns, value) => {
  return rows.filter((row) => {
    const values = row.values
      ? Object.values(row.values)
        .map((v) => JSON.stringify(v))
        .join('')
      : undefined
    return values.includes(value.toLowerCase())
  })
}

export const Table: FC<ITable> = memo(
  ({ className, columns, data, expand, loading, title, onRowClick }) => {
    const memoColumns = useMemo(() => columns, [columns])
    const memoData = useMemo(() => data || [], [data])

    const {
      state: { pageIndex },
      page,
      pageCount,
      setGlobalFilter,
      gotoPage,
      toggleSortBy,
      canPreviousPage,
      canNextPage,
      previousPage,
      nextPage,
    } = useTable(
      {
        columns: memoColumns,
        data: memoData,
        manualSorting: true,
        globalFilter,
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    )

    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
      <div
        className={classNames(
          'w-full flex flex-col items-end bg-white   border rounded',
          className
        )}
      >
        <TableToolbar title={title} onChange={onChange} />

        <TableBody
          columns={columns}
          loading={loading}
          page={page}
          expand={expand}
          data={data}
          onRowClick={onRowClick}
          toggleSortBy={toggleSortBy}
        />

        <TablePagination
          pageCount={pageCount}
          page={pageIndex}
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    )
  }
)
