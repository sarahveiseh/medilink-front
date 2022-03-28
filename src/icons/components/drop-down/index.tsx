import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useToggle } from 'hooks/use-toggle'
import { classNames } from 'utils/classes'

import { DropDownButton } from './drop-down-button'
import { DropDownBox } from './drop-down-box'
import { useLocation } from 'react-router'

export const DropDown: FC<IDropdown> = memo(
  ({
    className,
    label,
    children,
    isOpen = false,
    active,
    icon,
    hideArrow,
    existInDom = false,
    openError = false,
  }) => {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(isOpen)
    const toggle = () => setOpen(!open)

    useEffect(() => {
      if (!active && !isOpen) setOpen(false)
    }, [active, pathname])

    useEffect(() => {
      if (openError) setOpen(openError)
    }, [openError])

    return (
      <div className="col-full">
        <DropDownButton
          hideArrow={hideArrow}
          toggle={toggle}
          icon={icon}
          label={label}
          open={open}
          active={active}
          className={className}
        />
        <DropDownBox existInDom={existInDom} open={open}>
          {children}
        </DropDownBox>
      </div>
    )
  }
)
