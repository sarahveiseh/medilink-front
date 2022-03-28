import { Button } from 'components/button'
import { useToggle } from 'hooks/use-toggle'
import { ICArrowDown } from 'icons/arrow-down'
import { ICArrowUp } from 'icons/arrow-up'
import { ICChevronDown } from 'icons/chevron-down'
import { Fragment } from 'react'

export const TableHeadSort = ({ toggleSortBy, column }) => {
  const { open, toggle } = useToggle()
  return (
    <div className="relative">
      <Button icon onClick={() => toggle()}>
        <ICChevronDown className="w-4 h-4 text-blue-400" />
      </Button>

      {open && (
        <Fragment>
          <div className="w-[50px] rounded absolute -top-5 -right-7  bg-white border border-gray-300 z-[500] flex flex-col items-center space-y-1 p-1">
            <Button icon onClick={() => toggleSortBy(column.accessor, false)}>
              <ICArrowDown className="w-4 h-4 text-blue-400" />
            </Button>
            <Button icon onClick={() => toggleSortBy(column.accessor, true)}>
              <ICArrowUp className="w-4 h-4 text-blue-400" />
            </Button>
          </div>
          <div
            className="fixed inset-0 h-full w-full bg-transparent z-[400]"
            onClick={() => toggle()}
          ></div>
        </Fragment>
      )}
    </div>
  )
}
