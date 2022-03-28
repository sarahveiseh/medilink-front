import { Button } from 'components/button'
import { ICArrowLeft } from 'icons/arrow-left'
import { ICChevronLeft } from 'icons/chevron-left'
import { ICChevronRight } from 'icons/chevron-right'
import { classNames } from 'utils/classes'

const pager = (pageCount, page) => {
  const totalPages = pageCount

  const pages = Array.from(new Array(totalPages)).map((item, index) => index)

  const startPage =
    totalPages <= 10
      ? 1
      : page <= 6
      ? 1
      : page + 4 >= totalPages
      ? totalPages - 9
      : page - 5

  const endPage =
    totalPages <= 10
      ? totalPages
      : page <= 6
      ? 10
      : page + 4 >= totalPages
      ? totalPages
      : page + 4

  return pages.slice(startPage, endPage - 1)
}

export const TablePagination = ({
  pageCount,
  gotoPage,
  page,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
}) => {
  if (pageCount > 1)
    return (
      <div className=" w-full flex items-center justify-end mt-2 p-6">
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 mr-2 shadow bg-white '
          )}
        >
          <ICChevronLeft className="w-5 h-5 text-gray-600" />
        </Button>
        <Button
          onClick={() => gotoPage(0)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 mr-2 shadow',
            page === 0 ? 'bg-blue-500 text-white' : ' bg-white text-gray-600'
          )}
        >
          {1}
        </Button>
        {pager(pageCount, page).map((item, index) => (
          <Button
            key={index}
            onClick={() => gotoPage(item)}
            className={classNames(
              'w-8 h-8  mr-2 disabled:opacity-30 shadow',
              page === item
                ? 'bg-blue-500 text-white'
                : ' bg-white text-gray-600'
            )}
          >
            {item + 1}
          </Button>
        ))}
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 shadow',
            page === pageCount - 1
              ? 'bg-blue-500 text-white'
              : ' bg-white text-gray-600'
          )}
        >
          {pageCount}
        </Button>
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 ml-2 shadow bg-white '
          )}
        >
          <ICChevronRight className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    )
  else return null
}
