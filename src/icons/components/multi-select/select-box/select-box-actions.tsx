import { FC, memo } from 'react'
import { ICChevronDown } from 'icons/chevron-down'
import { ICChevronUp } from 'icons/chevron-up'
import { ICDelete } from 'icons/delete'

export const SelectBoxActions: FC<ISelect> = memo(
  ({ multiple, value, setValue, name, open }) => {
    return (
      <div className=" flex items-center space-x-2">
        {multiple
          ? value &&
            !open &&
            value.length > 0 && (
              <ICDelete
                onClick={(e) => {
                  e.stopPropagation()
                  if (setValue) {
                    setValue(name, '')
                  }
                }}
                role="delete"
                className="w-4 h-4 text-red-500  z-30 cursor-pointer"
              />
            )
          : value &&
            !open && (
              <ICDelete
                onClick={(e) => {
                  e.stopPropagation()
                  if (setValue) {
                    setValue(name, '')
                  }
                }}
                role="delete"
                className="w-4 h-4 text-red-500  z-30 cursor-pointer"
              />
            )}

        {open ? (
          <ICChevronUp className="w-4 h-4 text-gray-900" role="arrow-down" />
        ) : (
          <ICChevronDown className="w-4 h-4 text-gray-900" role="arrow-down" />
        )}
      </div>
    )
  }
)
