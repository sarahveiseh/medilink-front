type Props = {
  children: JSX.Element
  tip: string
  enabled?: boolean
  inTable?: boolean
}

export const ToolTip = ({ children, tip, enabled, inTable }: Props) => {
  return (
    <div className={`${inTable ? 'absolute' : 'relative'} group`}>
      {children}
      {enabled && (
        <div
          className={`absolute bottom-0 flex flex-col  ${
            inTable ? 'items-end right-2' : 'items-center'
          } hidden mb-6 group-hover:flex drop-shadow-sm `}
        >
          <span
            className={`relative z-10 p-2 text-xs rounded-md leading-none ${
              inTable && 'whitespace-nowrap'
            } text-white bg-gray-400 `}
          >
            {tip}
          </span>
          <div
            className={`w-3 h-3 -mt-2 rotate-45 bg-gray-400 ${
              inTable && 'mr-2'
            }`}
          ></div>
        </div>
      )}
    </div>
  )
}
