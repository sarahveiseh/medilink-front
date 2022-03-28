import { Button } from 'components/button'
import { useOutsideClick } from 'hooks/use-outside-click'
import { ICChevronDown } from 'icons'
import { useRef, useState } from 'react'
import { classNames } from 'utils/classes'
import { Menu } from './menu'
import { MenuItem } from './menu-item'

type Column = {
  label: string
  options: {
    value: string
    badge?: BadgeProps
  }[]
}

export const MenuSelectColumn = ({
  label,
  columns,
  isLoading,
  value,
  onChange,
}: {
  label: string
  isLoading: boolean
  columns: Column[]
  value: string
  onChange: (item: string) => void
}) => {
  return (
    <div className="flex flex-col items-stretch">
      <span className="text-sm text-gray-500">{label}</span>
      <LoadableMenuColumn
        columns={columns}
        isLoading={isLoading}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const LoadableMenuColumn = ({
  isLoading,
  columns,
  value,
  onChange,
}: {
  isLoading: boolean
  columns: Column[]
  value: string
  onChange: (item: string) => void
}) => {
  if (isLoading)
    return <div className="w-full h-6 bg-gray-200 rounded animate-pulse" />

  return (
    <MenuSelectionColumn columns={columns} value={value} onChange={onChange} />
  )
}

const MenuSelectionColumn = ({
  columns,
  onChange,
  value,
}: {
  columns: Column[]
  value: string
  onChange: (item: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <div
      className="flex items-center justify-between min-h-[24px]"
      ref={wrapperRef}
    >
      <span className="font-bold">{value}</span>
      <div className="relative bg-white">
        <Button icon className="w-5 h-5" onClick={() => setIsOpen(!isOpen)}>
          <ICChevronDown />
        </Button>
        {isOpen && (
          <Menu>
            <div className="flex">
              {columns?.map((column, index) => (
                <div key={index} className="min-w-[10rem]">
                  <div className="flex px-3 py-1 m-1 text-white bg-gray-700 rounded whitespace-nowrap">
                    {column?.label}
                  </div>
                  <div>
                    {column?.options?.map((option, index) => (
                      <MenuItem
                        key={index}
                        className="flex items-center justify-between py-1 gap-x-2"
                        onClick={() => {
                          onChange(option.value)
                          setIsOpen(false)
                        }}
                      >
                        <span>{option.value}</span>
                        {option.badge && <Badge {...option.badge} />}
                      </MenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Menu>
        )}
      </div>
    </div>
  )
}

type BadgeProps = {
  text: string
  color: 'blue' | 'green'
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <div
      className={classNames(
        'rounded p-1 text-xs',
        color === 'blue' && 'bg-blue-100 text-blue-500',
        color === 'green' && 'bg-green-100 text-green-500'
      )}
    >
      {text}
    </div>
  )
}
