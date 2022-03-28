import { FC, memo } from 'react'

export const ModalBackDrop: FC<IModal> = memo(({ onClose }) => {
  return (
    <div
      slot="back-drop"
      className="fixed inset-0 z-40 bg-black opacity-50"
      onClick={onClose}
    />
  )
})
