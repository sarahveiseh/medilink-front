export const DropDownBox = ({ open, existInDom, children }) => {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={`w-full ${open ? "" : "hidden"}`}
    >
      {existInDom ? (
        <div className={`flex flex-col pl-8 pt-1 ${open ? "" : "hidden"}`}>
          {children}
        </div>
      ) : (
        <>{open && <div className="flex flex-col pl-8 pt-1">{children}</div>}</>
      )}
    </div>
  );
};
