import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { ToolTip } from 'components/q-tooltip'
import { InputSkeleton } from 'components/input/skeleton'
import Slider from '@mui/material/Slider'

export const SliderInput = (props) => {
  const { validate } = useValidation(props)

  if (props.loading) return <InputSkeleton {...props} />
  else if (props.control) {
    return (
      <Controller
        control={props.control}
        rules={{ validate }}
        name={props.name}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          if (
            !props.marks?.find((m) => m?.label == value) &&
            ![undefined, ''].includes(value)
          )
            onChange('')
          return (
            <div className="relative flex flex-col items-start w-full ">
              <div className="flex items-center mb-2">
                {props.label && (
                  <label className="text-gray-700" htmlFor={props.name}>
                    {props.label}
                  </label>
                )}
                {props.tooltip && (
                  <ToolTip name={props.name} tooltip={props.tooltip} />
                )}
              </div>
              <Slider
                value={props.marks?.find((m) => m?.label == value)?.value || 0}
                valueLabelFormat={props.valueLabelFormat}
                step={null}
                min={0}
                max={12000}
                // step="any"
                valueLabelDisplay="auto"
                marks={props.marks}
                onChange={(_, val) =>
                  onChange(props.marks?.find((m) => m?.value == val)?.label)
                }
              />

              {error && (
                <p className="text-red-500 text-[12px]  mt-1">
                  {error.message}
                </p>
              )}
            </div>
          )
        }}
      />
    )
  }
}
