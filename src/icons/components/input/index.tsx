import { useValidation } from 'hooks/use-validation'
import { memo, useState } from 'react'
import { Controller } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { classNames } from 'utils/classes'
import { ToolTip } from '../q-tooltip'
import { InputSkeleton } from './skeleton'

export const Input = memo((props: any) => {
  const { validate } = useValidation(props)
  const [showPassword, setShowPassword] = useState(props.type || 'text')
  function ShowPassword() {
    if (showPassword === 'password') {
      setShowPassword('text')
    } else {
      setShowPassword('password')
    }
  }
  if (props.loading) return <InputSkeleton {...props} />
  else if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="relative flex flex-col items-start w-full ">
            <div
              className={classNames('flex items-center', props.label && 'mb-2')}
            >
              {props.label && (
                <label className="text-gray-700" htmlFor={props.name}>
                  {props.label}
                </label>
              )}
              {props.tooltip && (
                <ToolTip name={props.name} tooltip={props.tooltip} />
              )}
            </div>

            <div className="flex w-full">
              {props.textIcon && (
                <div className="flex items-center justify-center px-3 font-normal text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l">
                  {props.textIcon}
                </div>
              )}
              {props.type === 'password' ? (
                <>
                  <input
                    id={props.name}
                    data-testid={props.name}
                    value={
                      typeof value === 'string' || typeof value === 'number'
                        ? value
                        : ''
                    }
                    onChange={(e) => {
                      onChange(e.target.value)
                      if (props?.extraOnChange)
                        props?.extraOnChange(e.target.value)
                    }}
                    type={showPassword || 'text'}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    min={props.minNumber}
                    max={props.maxNumber}
                    className={classNames(
                      ' w-full focus:outline-none focus:shadow px-3 h-[44px]  text-gray-900 placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700 disabled:bg-gray-100 ',
                      props.className || '',
                      props.disabled && 'text-gray-500',
                      error
                        ? 'border border-red-400 shadow'
                        : 'border border-gray-300 focus:ring-1 focus:ring-indigo-400 ',
                      props.textIcon ? 'rounded rounded-l-none' : 'rounded'
                    )}
                  />
                  <span
                    onClick={ShowPassword}
                    className={`absolute right-4 top-1/2 translate-y-1/2 ${
                      error && 'top-1/3'
                    } cursor-pointer`}
                  >
                    {showPassword === 'password' ? (
                      <FaRegEye />
                    ) : (
                      <FaRegEyeSlash />
                    )}
                  </span>
                </>
              ) : (
                <input
                  id={props.name}
                  data-testid={props.name}
                  value={
                    props.value
                      ? props.value
                      : typeof value === 'string' || typeof value === 'number'
                      ? value
                      : ''
                  }
                  // onChange={onChange}
                  onChange={(e) => {
                    onChange(e.target.value)
                    if (props?.extraOnChange)
                      props?.extraOnChange(e.target.value)
                  }}
                  type={props.type || 'text'}
                  placeholder={props.placeholder}
                  disabled={props.disabled}
                  min={props.minNumber}
                  max={props.maxNumber}
                  className={classNames(
                    ' w-full focus:outline-none focus:shadow px-3 h-[44px]  text-gray-900  placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700 disabled:bg-gray-100 disabled:text-gray-500',
                    props.className || '',
                    props.disabled && 'text-gray-500',
                    error
                      ? 'border border-red-400 shadow'
                      : 'border border-gray-300 focus:ring-1 focus:ring-indigo-400 ',
                    props.textIcon ? 'rounded rounded-l-none' : 'rounded'
                  )}
                />
              )}
            </div>
            {error && (
              <p className="text-red-500 text-[12px]  mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    )
  else
    return (
      <div className="relative flex flex-col items-start w-full">
        {props.label && (
          <label className="mb-2 text-gray-700">{props.label}</label>
        )}
        {props.type === 'password' ? (
          <>
            {' '}
            <input
              value={props.value || ''}
              onChange={props.onChange}
              type={showPassword || 'text'}
              placeholder={props.placeholder}
              disabled={props.disabled}
              onFocus={props.onFocus}
              className={`disabled:text-gray-500 disabled:bg-gray-100 w-full focus:outline-none border border-gray-300 rounded px-2 h-[48px] bg-transparent focus:ring-1 focus:ring-indigo-400 bg-gray-50 ${
                props.className || ''
              }`}
            />
            <span
              onClick={ShowPassword}
              className={`absolute right-4 top-1/2 translate-y-1/2 cursor-pointer ${
                props?.value?.length > 30 && 'bg-gray-100'
              }`}
            >
              {showPassword === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </>
        ) : (
          <input
            value={props.value || ''}
            onChange={props.onChange}
            type={props.type || 'text'}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onFocus={props.onFocus}
            className={`disabled:text-gray-500  disabled:bg-gray-100 w-full focus:outline-none border border-gray-300 rounded px-2 h-[48px] bg-transparent focus:ring-1 focus:ring-indigo-400 ${props.className}`}
          />
        )}
        {props.error && (
          <p className="text-red-500 text-[12px]  mt-2">{props.error}</p>
        )}
      </div>
    )
})
