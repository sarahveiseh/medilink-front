export const AuthWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full md:pt-[100px] pt-[50px]">
      {children}
    </div>
  );
};
