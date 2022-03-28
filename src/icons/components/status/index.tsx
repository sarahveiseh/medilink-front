export const Status = ({ status = '', active }) => {
  switch (status) {
    case 'warning':
      return <div className="w-4 h-4 bg-yellow-500 rounded-full" />
      break
    case 'critical':
      return <div className="w-4 h-4 bg-red-500 rounded-full" />
      break
    case 'healthy':
      return <div className="w-4 h-4 bg-green-600 rounded-full" />
      break
    case 'no_alarm':
      return <div className="w-4 h-4 bg-gray-400 rounded-full" />
      break
    case 'insufficient_data':
      return <div className="w-4 h-4 bg-green-600 rounded-full" />
      break
  }

  if (active) return <div className="w-4 h-4 bg-green-600 rounded-full" />
  else return <div className="w-4 h-4 bg-gray-600 rounded-full" />
}
