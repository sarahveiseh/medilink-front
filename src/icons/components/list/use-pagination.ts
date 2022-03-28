import _ from 'lodash'
import { useEffect, useState } from 'react'

const getPaginationData = <T>(data: T[], perPage: number, page: number) => {
  const startIndex = page * perPage
  const endIndex = Math.min(startIndex + perPage, data.length)
  const pageData = data.slice(startIndex, endIndex)

  return pageData
}

const getPaginationIndexes = (
  current: number,
  pageCount: number,
  siblingCount: number
) => {
  let left = current - siblingCount
  let right = current + siblingCount + 1

  if (left <= 0) {
    right += Math.abs(left) + 1
  }
  if (right >= pageCount - 1) {
    left -= Math.abs(right - (pageCount - 1)) + 1
  }
  if (left <= siblingCount) {
    right += 1
  }

  const between = _.range(left, right).filter(
    (index) => index > 0 && index < pageCount - 1
  )

  return {
    start: 0,
    between,
    end: pageCount,
  }
}

export const usePagination = <T>(
  data: T[],
  perPage: number,
  siblingCount: number
) => {
  const [current, setCurrent] = useState(0)
  const pageCount = Math.ceil(data.length / perPage)
  const pageData = getPaginationData(data, perPage, current)
  const indexes = getPaginationIndexes(current, pageCount, siblingCount)

  useEffect(() => {
    setCurrent(0)
  }, [data])

  return {
    pageData,
    indexes,
    dots: {
      hasLeft:
        current - siblingCount > 1 && pageCount > 1 + 2 + siblingCount * 2,
      hasRight:
        current + siblingCount < pageCount - 2 &&
        pageCount > 1 + 2 + siblingCount * 2,
    },
    currentPage: current,
    isAtStart: current === 0,
    isAtEnd: current >= pageCount - 1,
    setPage: setCurrent,
  }
}
