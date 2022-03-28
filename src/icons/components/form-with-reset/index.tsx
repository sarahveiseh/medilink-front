import { cloneElement, FC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { classNames } from 'utils/classes'

export const FormWithReset: FC<IForm> = memo(
  ({ className, onSubmit, children, defaultValues }) => {
    const { control, handleSubmit, reset } = useForm({ defaultValues })

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames('w-full flex flex-col items-center', className)}
      >
        {children.length
          ? children.map((child, key) =>
              cloneElement(child, {
                control,
                reset,
                key,
              })
            )
          : cloneElement(children, {
              control,
              reset
            })}
      </form>
    )
  }
)
