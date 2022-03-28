import { useState } from 'react'
import { IoClose, IoInformationCircle, IoWarning } from 'react-icons/io5'

const MessageBox = ({
  children,
  type = 'information',
  closable,
  className,
}: {
  children: any
  type?: string
  className?: string
  closable?: boolean
}) => {
  const [showMessage, setShowMessage] = useState(true)

  if (!showMessage) return null
  if (type === 'custome')
    return (
      <div
        className={` text-base  font-normal shadow ${
          !className && 'bg-gray-50 '
        } border-l-[6px] border-blue-400  w-full  rounded-r-sm p-3 py-4 mb-3 flex  ${className} `}
      >
        <span className=" w-full ">{children}</span>
        <span className="ml-2 cursor-pointer font-semibold">
          {closable && <IoClose onClick={() => setShowMessage(false)} />}
        </span>
      </div>
    )
  if (type === 'information')
    return (
      <div
        className={` text-base  font-normal shadow ${
          !className && 'bg-gray-50 '
        } border-l-[6px] border-blue-400  w-full  rounded-r-sm p-3 py-4 mb-3 flex  ${className} `}
      >
        <span className="flex">
          <IoInformationCircle className="w-8 mt-[5px] sm:invisible md:visible" />{' '}
        </span>
        <span className=" w-full ">{children}</span>
        <span className="ml-2 cursor-pointer font-semibold">
          {closable && <IoClose onClick={() => setShowMessage(false)} />}
        </span>
      </div>
    )
  else if (type === 'warning')
    return (
      <div
        className={`text-base ${
          !className && 'bg-red-100 bg-opacity-80'
        } font-normal shadow border-l-[6px] border-red-400 w-full  rounded-r-sm p-3 py-4 mb-3 flex ${className}`}
      >
        <span className="flex">
          <IoWarning className="w-8 mt-[5px] sm:invisible md:visible" />{' '}
        </span>
        <span className="w-full">{children}</span>
        <span className="ml-2 cursor-pointer font-semibold">
          {closable && <IoClose onClick={() => setShowMessage(false)} />}
        </span>
      </div>
    )
  else return null
}
export default MessageBox
