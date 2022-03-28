import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

import { ModalBackDrop } from '../modal-back-drop'
import { ModalBody } from '../modal-body'
import { ModalHeader } from '../modal-header'

export const ModalCore: FC<IModal> = memo(
  ({
    children,
    onClose,
    className,
    size,
    slot,
    role,
    id,
    header,
    withHeader,
  }) => {
    return (
      <div
        className="fixed inset-0 row-items-start  pt-10 md:pt-32 z-[999] "
        slot={slot}
        id={id}
        role={role}
      >
        <div
          slot="modal"
          className={classNames(
            'col-center z-50 rounded overflow-hidden max-h-[85%] bg-light dark:bg-dark animate-fade-in-up',
            size === 'xl'
              ? 'w-10/12'
              : size === 'lg'
              ? 'w-10/12 lg:w-8/12'
              : size === 'md'
              ? 'w-10/12 lg:w-1/2'
              : size === 'sm'
              ? 'w-10/12 lg:w-4/12'
              : 'w-10/12 lg:w-1/2'
          )}
        >
          <ModalHeader
            withHeader={withHeader}
            header={header}
            onClose={onClose}
          />
          <ModalBody className={className}>{children}</ModalBody>
        </div>
        <ModalBackDrop onClose={onClose} />
      </div>
    )
  }
)
