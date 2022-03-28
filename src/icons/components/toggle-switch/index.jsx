export const ToggleSwitch = ({
  check = false,
  setCheck,
  label,
  atEnd = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`flex ${
        atEnd && 'justify-end'
      } items-center w-full ${className}`}
      onClick={() => {
        setCheck()
      }}
    >
      <label className="flex items-center cursor-pointer">
        <div className="ml-3 text-gray-700 font-medium pr-5">{label}</div>
        <div className="relative">
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <button
            type="button"
            className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
              check && 'bg-[#3B86FF] translate-x-full'
            }`}
          ></button>
        </div>
      </label>
    </button>
  )
}
