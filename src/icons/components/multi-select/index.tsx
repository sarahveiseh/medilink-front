import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { useToggle } from 'hooks/use-toggle'
import { classNames } from 'utils/classes'

import { SelectBackDrop } from './select-back-drop'
import { SelectBox } from './select-box'
import { SelectDropBox } from './select-drop-box'

export const MultiSelect: FC<ISelect> = memo(
  ({
    label,
    control,
    className,
    name,
    required,
    multiple = true,
    setValue,
    options,
  }) => {
    const { open, toggle } = useToggle()
    const { validate } = useValidation({ required })

    if (control)
      return (
        <div
          className={classNames('w-full col-start', className)}
          slot="wrapper"
        >
          {label && (
            <label
              className={classNames(' mb-2 text-light dark:text-dark')}
              slot="label"
            >
              {label}
            </label>
          )}

          <Controller
            name={name}
            control={control}
            rules={{ validate }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div className={`w-full flex-col relative`} slot="controlled">
                <SelectBox
                  onChange={onChange}
                  toggle={toggle}
                  value={value}
                  error={error}
                  multiple={multiple}
                  setValue={setValue}
                  name={name}
                  open={open}
                  label={label}
                />
                {open && (
                  <SelectDropBox
                    onChange={onChange}
                    toggle={toggle}
                    value={value}
                    multiple={multiple}
                    options={options}
                  />
                )}
                {error && (
                  <p className="absolute top-[42px] left-0 text-xs mt-2 text-red-700 dark:text-red-500 ">
                    {error.message}
                  </p>
                )}
              </div>
            )}
          />

          {open && <SelectBackDrop toggle={toggle} />}
        </div>
      )
    else
      return (
        <div
          className={classNames('w-full col-start', className)}
          slot="wrapper"
        >
          {label && (
            <label
              className={classNames(' mb-2 text-light dark:text-dark')}
              slot="label"
            >
              {label}
            </label>
          )}

          <div className={`w-full flex-col relative`} slot="controlled">
            <SelectBox
              // onChange={onChange}
              toggle={toggle}
              // value={value}
              // error={error}
              multiple={multiple}
              setValue={setValue}
              name={name}
              open={open}
              label={label}
            />
            {open && (
              <SelectDropBox
                // onChange={onChange}
                toggle={toggle}
                // value={value}
                multiple={multiple}
                options={options}
              />
            )}
            {/* <Error error={error} className="absolute top-[42px] left-0" /> */}
          </div>

          {open && <SelectBackDrop toggle={toggle} />}
        </div>
      )
  }
)
