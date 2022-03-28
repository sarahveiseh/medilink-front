import { LoadingBounce } from 'components/loading/bounce'
import { FC, memo } from 'react'
import ReactTooltip from 'react-tooltip'
import { classNames } from 'utils/classes'

export const Button: FC<IButton> = memo(
  ({
    className,
    children,
    onClick,
    disabled,
    type,
    role,
    id,
    icon,
    loading,
    onMouseEnter,
    onMouseLeave,
    dragHandleProps,
    tooltip,
  }) => {
    return (
      <>
        <button
          disabled={disabled || loading}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...dragHandleProps}
          type={type}
          id={id}
          role={role}
          className={classNames(
            className,
            ' flex items-center justify-center rounded focus:outline-none  disabled:opacity-50  transition duration-300 ease-in-out disabled:cursor-not-allowed',
            !icon && 'shadow h-9',
            loading
              ? 'cursor-wait '
              : !disabled && 'transform hover:-translate-y-1 hover:scale-105',
            icon && loading && 'animate-pulse'
          )}
          data-tip={!!tooltip}
          data-for={tooltip}
        >
          {loading && !icon ? <LoadingBounce /> : children}
        </button>
        {tooltip && (
          <ReactTooltip id={tooltip} type="dark" delayShow={300}>
            {tooltip}
          </ReactTooltip>
        )}
      </>
    )
  }
)
