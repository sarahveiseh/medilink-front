export const TextareaSkeleton = (props) => {
  return (
    <div className="w-full flex flex-col items-start relative animate-pulse ">
      {props.label && <label className="text-gray-700 h-4 mb-2"></label>}
      <input className=" w-full  rounded px-3 h-24  text-gray-900 bg-gray-200 placeholder-gray-500   " />
    </div>
  )
}
