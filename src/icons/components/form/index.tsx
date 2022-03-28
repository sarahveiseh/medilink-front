import {
  cloneElement,
  FC,
  memo,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { useForm } from 'react-hook-form'
import { classNames } from 'utils/classes'

export const Form: FC<IForm> = memo(
  forwardRef((props, ref) => {
    const { className, onSubmit, children, defaultValues, resolver } = props
    const { control, handleSubmit, reset, setValue, setError, clearErrors } =
      useForm({
        defaultValues,
        resolver,
      })

    // Needed for dynamic default values
    useEffect(() => {
      reset(defaultValues)
    }, [defaultValues, reset])

    useImperativeHandle(ref, () => ({
      handleSubmit,
      reset,
      setValue,
      setError,
      clearErrors,
    }))

    return (
      <form
        onSubmit={handleSubmit((state) => onSubmit(state, setError))}
        className={classNames('w-full flex flex-col items-center', className)}
      >
        {children.length
          ? children.map((child, key) =>
              cloneElement(child, {
                control,
                key,
                setValue,
                setError,
                clearErrors,
                reset,
              })
            )
          : cloneElement(children, {
              control,
              setValue,
              setError,
              clearErrors,
              reset,
            })}
      </form>
    )
  })
)
