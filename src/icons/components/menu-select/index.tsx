import { Button } from 'components/button'
import { useOutsideClick } from 'hooks/use-outside-click'
import { ICChevronDown } from 'icons'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from './menu'
import { MenuItem } from './menu-item'

type Props = {
  label?: string
  options: string[]
  isLoading?: boolean
  environment?: boolean
  application?: boolean
  value: string
  onChange: (item: string) => void
}

export const MenuSelect = ({
  environment,
  application,
  label,
  options,
  isLoading,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col items-stretch">
      <span className="text-sm text-gray-500">{label}</span>
      <LoadableMenu
        options={options}
        isLoading={isLoading}
        value={value}
        onChange={onChange}
        environment={environment}
        application={application}
      />
    </div>
  )
}
const LoadableMenu = ({
  environment,
  application,
  isLoading,
  options,
  value,
  onChange,
}: {
  options: string[]
  isLoading?: boolean
  environment?: boolean
  application?: boolean
  value: string
  onChange: (item: string) => void
}) => {
  if (isLoading)
    return <div className="w-full h-6 bg-gray-200 rounded animate-pulse" />

  return (
    <MenuSelection
      options={options}
      value={value}
      onChange={onChange}
      environment={environment}
      application={application}
    />
  )
}

const MenuSelection = ({
  environment,
  application,
  options,
  onChange,
  value,
}: {
  environment?: boolean
  application?: boolean
  options: string[]
  value: string
  onChange: (item: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef, () => {
    if (isOpen) setIsOpen(false)
  })
  const firstOption = options?.[0]
  useEffect(() => {
    onChange(firstOption)
  }, [firstOption, onChange])
  const { push } = useHistory()
  return (
    <div
      className="flex items-center justify-between min-h-[24px]"
      ref={wrapperRef}
    >
      <span className="font-bold">{value}</span>
      <div className="relative">
        <Button icon className="w-5 h-5" onClick={() => setIsOpen(!isOpen)}>
          <ICChevronDown />
        </Button>
        {isOpen && (
          <Menu>
            {!options && (environment || application) && (
              <div
                className="w-max p-2 cursor-pointer hover:bg-blue-50 transition-colors rounded"
                onClick={() => {
                  setIsOpen(false)
                  push(`${environment ? '/environments' : '/applications'}`)
                }}
              >
                no {environment ? 'environment' : 'application'} added yet{' '}
                <span className="text-blue-300 hover:text-blue-200  transition-colors">
                  + add
                </span>
              </div>
            )}
            {options?.map((option, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        )}
      </div>
    </div>
  )
}
