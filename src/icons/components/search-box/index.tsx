import { ICSearch } from 'icons/search'

export const SearchBox = ({ onChange, value }) => {
  return (
    <div className="flex rounded border-grey-light border p-1">
      <button>
        <span className="w-auto flex justify-end items-center cursor-default text-grey p-2  mr-1">
          <ICSearch className="w-4 h-4 text-gray-500" />
        </span>
      </button>
      <input
        value={value}
        onChange={onChange}
        className="w-full rounded mr-4 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
