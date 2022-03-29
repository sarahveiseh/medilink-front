export const SelectSkeleton = (props) => {
  return (
    <div className="relative flex flex-col items-start w-full animate-pulse ">
      {props.label && <label className="h-4 mb-2 text-gray-700"></label>}
      <input
        disabled
        className=" w-full  rounded focus:outline-none focus:shadow px-3 h-[44px]  text-gray-900 bg-gray-200 placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700  "
      />
    </div>
  )
}
