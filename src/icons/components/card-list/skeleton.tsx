import _ from 'lodash'

export const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {_.range(12).map((i) => (
        <div
          key={i}
          className="p-5 space-y-4 border border-gray-300 rounded h-28"
        >
          <div className="w-20 h-4 bg-gray-100 rounded" />
          <div className="w-32 h-4 bg-gray-100 rounded" />
          <div className="w-12 h-4 ml-auto bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  )
}
