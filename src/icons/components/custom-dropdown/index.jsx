import { DropDown } from 'components/drop-down'
import { useToggle } from 'hooks/use-toggle'
import { ICArrowDown } from 'icons/arrow-down'
import { ICArrowRight } from 'icons/arrow-right'

export const CustomDropDown = ({
  children,
  className = '',
  title,
  render = null,
  isOpen = false,
}) => {
  const { open, toggle } = useToggle(isOpen)
  return (
    <div
      onClick={() => toggle()}
      className={`w-full border rounded overflow-hidden ${className}`}
    >
      <DropDown
        isOpen={true}
        hideArrow
        icon={() =>
          open ? (
            <ICArrowRight className="w-4 h-4 " />
          ) : (
            <ICArrowDown className="w-4 h-4 " />
          )
        }
        label={
          <div className="flex justify-start space-x-3">
            <div className="ml-2 text-lg font-semibold text-black">{title}</div>
            {render && render()}
          </div>
        }
        className="  p-[12px] w-full"
      >
        <div className="w-full pt-5 pb-8 border-t pr-7">{children}</div>
      </DropDown>
    </div>
  )
}
