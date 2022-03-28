export const ICWrapper = ({
  children,
  onClick,
  className,
  role,
  id,
  viewPort,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      viewBox={`${viewPort ? viewPort : "0 0 16 16"}`}
      onClick={onClick}
      role={role}
      id={id}
    >
      {children}
    </svg>
  );
};
