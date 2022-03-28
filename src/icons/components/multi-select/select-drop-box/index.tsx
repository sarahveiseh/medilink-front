import { SelectOption } from '../select-option'
import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const SelectDropBox: FC<ISelect> = memo(
  ({ onChange, toggle, value, ref, options }) => {
    return (
      <div
        className={classNames(
          ' w-full col-start min-h-[4rem] max-h-[12.5rem] overflow-y-auto rounded-b px-4 pt-18px z-50 top-1px border-r-2 border-b-2 border-l-2  border-indigo-400 bg-white dark:bg-gray-400'
        )}
        ref={ref}
      >
        {(options || []).map((option) => (
          <SelectOption
            onChange={onChange}
            toggle={toggle}
            value={option.value}
            selected={value && value.includes(option.value)}
            multiple
            state={value}
            key={option.id}
          >
            {option.title}
          </SelectOption>
        ))}
      </div>
    )
  }
)
