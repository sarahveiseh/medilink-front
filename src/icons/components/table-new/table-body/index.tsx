import { classNames } from 'utils/classes'
import { TableHead } from '../table-head'
import { TableRow } from '../table-row'

export const TableBody = ({
  columns,
  loading,
  page,
  expand,
  data,
  onRowClick,
  toggleSortBy,
}) => {
  return (
    <div
      className={classNames('w-full flex flex-col items-center p-4')}
      slot="wrapper"
    >
      <TableHead
        columns={columns}
        loading={loading}
        toggleSortBy={toggleSortBy}
      />

      {loading && (!page || page.length === 0) ? (
        Array.from(new Array(10)).map((item, index) => (
          <TableRow
            key={index}
            item={item}
            columns={columns}
            index={index}
            expand={expand}
            loading={loading}
          />
        ))
      ) : page && page.length > 0 ? (
        (page || []).map((item, index) => (
          <TableRow
            key={index}
            item={item}
            columns={columns}
            index={index}
            expand={expand}
            loading={loading}
            length={data.length}
            onRowClick={onRowClick}
          />
        ))
      ) : (
        <span className="text-gray-600 pt-6 text-lg">No items</span>
      )}
    </div>
  )
}
