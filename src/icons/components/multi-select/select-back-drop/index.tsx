import { FC, memo } from "react";

export const SelectBackDrop: FC<ISelect> = memo(({ toggle, ref }) => {
  return (
    <div
      slot="wrapper"
      ref={ref}
      className="opacity-0 absolute inset-0 z-20"
      onClick={() => toggle()}
    ></div>
  );
});
