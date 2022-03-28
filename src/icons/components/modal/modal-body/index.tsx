import { FC, memo } from "react";
import { classNames } from "utils/classes";

export const ModalBody: FC<IModal> = memo(({ children, className }) => {
  return (
    <div
      className={classNames("w-full h-full overflow-auto", className)}
      slot="body"
    >
      {children}
    </div>
  );
});
