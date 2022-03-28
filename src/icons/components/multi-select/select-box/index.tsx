import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { SelectBoxActions } from './select-box-actions'
import { SelectBoxValue } from './select-box-value'

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, open, label }) => {
    return (
      <div
        role="toggler"
        onClick={() => toggle()}
        className={classNames(
          ' w-full row-between focus:outline-none overflow-hidden cursor-pointer text-gray-900 bg-white dark:bg-gray-400  ',
          open
            ? 'rounded-t border-t-2 border-r-2 border-l-2 border-indigo-400'
            : error
            ? 'rounded border-2 border-red-400 shadow'
            : 'rounded border border-light dark:border-dark',
          multiple && value ? 'min-h-[2.5rem]  py-2 pl-2 pr-4' : 'h-10  px-4'
        )}
      >
        <SelectBoxValue
          multiple={multiple}
          value={value}
          open={open}
          label={label}
        />
        <SelectBoxActions
          multiple={multiple}
          value={value}
          setValue={setValue}
          name={name}
          open={open}
        />
      </div>
    )
  }
)
