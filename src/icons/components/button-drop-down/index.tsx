import { LoadingBounce } from 'components/loading/bounce'
import { useOutsideClick } from 'hooks/use-outside-click'
import { memo, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { classNames } from 'utils/classes'

type Props = {
  dropDownWidth?: string
  onSelect?: any
  children: any
  className?: string
  onClick?: any
  disabled?: boolean
  type?: any
  role?: any
  id?: any
  icon?: any
  loading?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
  dragHandleProps?: any
  option?: {
    title: string
    value: string
    disabled?: boolean
    className?: string
  }[]
}

const ButtonDropdown = memo(
  ({
    option,
    onSelect,
    dropDownWidth,
    className,
    children,
    disabled,
    type,
    role,
    id,
    icon,
    loading,
    onMouseEnter,
    onMouseLeave,
    dragHandleProps,
  }: Props) => {
    const [showOption, setShowOption] = useState(false)

    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, () => {
      if (showOption) setShowOption(false)
    })

    return (
      <div className="relative" ref={wrapperRef}>
        <button
          disabled={disabled || loading}
          onClick={() => {
            setShowOption((prevState) => !prevState)
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...dragHandleProps}
          type={type}
          id={id}
          role={role}
          className={classNames(
            className,
            ' flex px-2 items-center justify-center rounded active:bg-opacity-100 hover:bg-opacity-90 transition-opacity focus:outline-none  disabled:opacity-50   duration-300 ease-in-out disabled:cursor-not-allowed',
            !icon && 'shadow h-[44px]',
            loading && 'cursor-wait ',
            icon && loading && 'animate-pulse',
            showOption && 'shadow-none border'
          )}
        >
          <div className="flex items-center justify-around w-full">
            {loading && !icon ? <LoadingBounce /> : children}
            <BiChevronDown
              className={`${
                showOption && 'rotate-180 transition-transform'
              } transition`}
            />
          </div>
        </button>
        {/* TODO for icon and animation */}
        {showOption && (
          // <div
          //   className={`absolute mt-1 z-30 rounded bg-white shadow-lg border p-1 ${dropDownWidth}`}
          // >
          <div
            className={` absolute z-[3] mt-1 rounded bg-white shadow-lg border p-1 ${dropDownWidth}`}
          >
            {option?.map((option) => (
              <button
                type="button"
                key={option.title}
                className={`p-2 flex flex-col w-full font-normal break-all transition-colors rounded cursor-pointer ${
                  option.className
                } ${
                  option?.disabled
                    ? 'hover:cursor-not-allowed hover:bg-gray-400 '
                    : 'hover:bg-blue-400'
                } hover:text-white hover:shadow`}
                onClick={() => option?.disabled || onSelect(option.value)}
              >
                {option.title}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }
)
export default ButtonDropdown
