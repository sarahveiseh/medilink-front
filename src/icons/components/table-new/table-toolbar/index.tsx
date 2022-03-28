export const TableToolbar = ({ title, onChange }) => {
  return (
    <div className="w-full flex flex-col space-y-6 rounded-t">
      <div className="w-full flex items-center justify-between h-12 bg-white px-6 overflow-hidden border-b rounded-t">
        {title ? (
          <span className="text-lg  font-semibold">{title}</span>
        ) : (
          <div />
        )}
      </div>
      <div className="w-1/4 min-w-[200px] self-end px-6 ">
        <input
          placeholder="Search here ..."
          onChange={(e) => onChange(e.target.value)}
          className="w-full focus:outline-none border border-gray-300 rounded p-2 bg-transparent focus:ring-1 focus:ring-indigo-400"
        />
      </div>
    </div>
  )
}
