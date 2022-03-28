import { FC, memo } from 'react'
import { classNames } from 'utils/classes'
import { SubmenuList } from '../../containers/dashboards/admin-dashboard/admin-dashboard-close/submenu-list'

export const Drawer: FC<IDrawer> = memo(
  ({ children, open, element, position, setElement }) => {
    return (
      <div className="relative">
        <div
          className={classNames(
            'h-screen flex-col shadow-lg z-30 bg-gray-900 overflow-y-scroll overflow-x-hidden fixed scrollbar-hide transition-width duration-500 ease-in-out ',
            open ? 'w-72' : 'w-20'
          )}
        >
          {children}
        </div>
        <SubmenuList
          setElement={setElement}
          element={element}
          position={position}
        />
      </div>
    )
  }
)
