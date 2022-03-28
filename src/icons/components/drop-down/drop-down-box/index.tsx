import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const DropDownBox: FC<IDropdown> = memo(
  ({ open, existInDom, children }) => {
    return (
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames('w-full', open ? '' : 'hidden')}
      >
        {existInDom ? (
          <div className={`flex flex-col pl-8 pt-1 ${open ? '' : 'hidden'}`}>
            {children}
          </div>
        ) : (
          <>
            {open && <div className="flex flex-col pl-8 pt-1">{children}</div>}
          </>
        )}
        {/* old version */}
        {/* {open && <div className="flex flex-col pl-8 pt-1">{children}</div>} */}
      </div>
    )
  }
)
