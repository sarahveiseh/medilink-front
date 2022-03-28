import {
  NextButton,
  PaginationButton,
  PrevButton,
} from 'containers/pagination-container'
import { BsThreeDots } from 'react-icons/bs'

export const Pagination = ({
  indexes,
  dots,
  isAtStart,
  isAtEnd,
  currentPage,
  setPage,
}) => {
  return (
    <div className="flex justify-end gap-x-2">
      <PrevButton
        onClick={() => setPage((current) => current - 1)}
        block={isAtStart}
      />
      <PaginationButton
        selected={isAtStart}
        number={indexes.start + 1}
        onClick={() => setPage(indexes.start)}
      />
      {dots.hasLeft && (
        <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
          <BsThreeDots />
        </div>
      )}
      {indexes.between.map((pageIndex) => (
        <PaginationButton
          selected={pageIndex === currentPage}
          key={pageIndex}
          number={pageIndex + 1}
          onClick={() => setPage(pageIndex)}
        />
      ))}
      {dots.hasRight && (
        <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
          <BsThreeDots />
        </div>
      )}
      {indexes.end > 1 && (
        <PaginationButton
          selected={isAtEnd}
          number={indexes.end}
          onClick={() => setPage(indexes.end - 1)}
        />
      )}
      <NextButton
        onClick={() => setPage((current) => current + 1)}
        block={isAtEnd}
      />
    </div>
  )
}
