import { Text } from 'components/text'
import { ICClose } from 'icons/close'
import { FC, memo } from 'react'

export const ModalHeader: FC<IModal> = memo(
  ({ header, onClose, withHeader }) => {
    if (withHeader)
      return (
        <div className=" w-full row-between pt-6 pb-2 px-8">
          {header ? (
            <Text className="text-gray-600 font-bold">{header}</Text>
          ) : (
            <div />
          )}
          {onClose && (
            <ICClose
              className="w-8 h-8 text-gray-600 cursor-pointer"
              onClick={onClose}
            />
          )}
        </div>
      )
    else return null
  }
)
