import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const SelectOptionSingle: FC<ISelectOption> = memo(
  ({ key, state, disabled, onChange, value, toggle, onClick, children }) => {
    return (
      <span
        slot="wrapper"
        key={key}
        className={classNames(
          'w-full flex items-center py-2 z-40 hover:text-indigo-700',
          state === value
            ? 'text-indigo-700 font-semibold'
            : ' text-gray-500 dark:text-gray-700',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        )}
        onClick={() => {
          onChange(value)
          toggle()
          onClick && onClick(toggle)
        }}
      >
        {children}
      </span>
    )
  }
)
