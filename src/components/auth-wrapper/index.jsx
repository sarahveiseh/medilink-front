export const AuthWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full md:py-[100px] py-[50px]">
      {children}
    </div>
  );
};
