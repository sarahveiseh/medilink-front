
import { classNames } from 'utils/classes'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
export const AdminDashboardToggle = ({ open, toggleDrawer }) => {
  return (
    <div
      onClick={() => toggleDrawer()}
      className={classNames(
        'h-12 bg-gray-900 z-50 cursor-pointer fixed bottom-0 mt-1  transition-width duration-500 ease-in-out',
        open ? 'w-72' : 'w-20'
      )}
    >
      <hr className='w-full opacity-30' />
      <div className='w-full  pl-6 flex justify-start items-center mt-2'>
        {open ? (
          <div
            className="flex items-center justify-around text-gray-400 overflow-x-hidden"
          >
            <HiChevronDoubleLeft id="close" className="w-6 h-w-6 mr-2" /> <span className="font-medium" >Collapse</span>
          </div>
        ) : (
          <HiChevronDoubleRight id="menu" className="w-6 h-w-6 mt-1 text-gray-400" />
        )}
      </div>
    </div>
  )
}
