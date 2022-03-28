import { Button } from 'components/button'
import { Link } from 'react-router-dom'

export const NavigatorItem = ({
  step,
  title,
  isSelected,
  icon,
  maxSteps,
  link,
  disabled = false,
}) => {
  return (
    <div className="flex items-center px-2">
      {isSelected ? (
        <div className="p-4 rounded-full bg-[#e8e1f8]">{icon}</div>
      ) : (
        <div
          className={`hover:bg-[#f5f1ff] p-3 rounded-full ${
            disabled && 'pointer-events-none'
          }`}
        >
          <Link to={link}>
            <Button icon className={`hover:cursor-pointer `}>
              {icon}
            </Button>
          </Link>
        </div>
      )}
      {isSelected && (
        <div className="flex-col pl-2">
          <p className={`pb-1 text-flashPrimary font-medium`}>
            Step {step}/{maxSteps}
          </p>
          <h2 className={`${isSelected ? 'font-bold' : 'font-medium'}`}>
            {title}
          </h2>
        </div>
      )}
    </div>
  )
}
