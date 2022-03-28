import { LoadingBounce } from 'components/loading'
import { ReactNode, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { BsChevronDown } from 'react-icons/bs'

interface Option {
  title: string
  value: string
  disabled?: boolean
}

interface CustomSelectProps {
  name: string
  control: Control<any>
  label: string
  options?: Option[]
  isLoading: boolean
  disabled: boolean
}

export function CustomSelect({
  name,
  control,
  label,
  options = [],
  isLoading,
  disabled,
}: CustomSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select
          label={label}
          value={value}
          onChange={onChange}
          options={options}
          isLoading={isLoading}
          disabled={disabled}
        />
      )}
    />
  )
}

interface SelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  isLoading: boolean
  disabled: boolean
}

function Select({
  label,
  value,
  onChange,
  options,
  isLoading,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) return <LoadingBounce center />

  return (
    <div className="relative space-y-2 font-normal">
      <div className="text-sm text-gray-700">{label}</div>
      <button
        type="button"
        className="rounded border px-3 h-[44px] text-gray-900 border-gray-300 flex justify-between w-full items-center disabled:bg-gray-200 focus:shadow cursor-default"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        disabled={disabled}
      >
        <div>{value}</div>
        <BsChevronDown />
      </button>
      {isOpen && (
        <Options
          onChange={(value) => {
            onChange(value)
            setIsOpen(false)
          }}
          options={options}
        />
      )}
    </div>
  )
}

interface OptionsProps {
  options: Option[]
  onChange: (value: string) => void
}

function Options({ options, onChange }: OptionsProps) {
  return (
    <div className="absolute w-full max-h-[50vh] overflow-y-auto shadow-md border rounded flex flex-col z-10 bg-white">
      {options.length === 0 && (
        <div className="p-3 text-xs font-semibold text-center">No options</div>
      )}
      {options.map((option, index) => (
        <SelectItem
          key={index}
          onClick={() => onChange(option.value)}
          disabled={option.disabled}
        >
          {option.title}
        </SelectItem>
      ))}
    </div>
  )
}

interface SelectItemProps {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
}

function SelectItem({ children, disabled, onClick }: SelectItemProps) {
  return (
    <button
      type="button"
      className="p-2 text-left disabled:text-gray-400 hover:bg-gray-100 disabled:bg-gray-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
