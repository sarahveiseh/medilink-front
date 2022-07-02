export const Wrapper = ({ children, title }) => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 bg-white rounded shadow-md xl:flex-row min-h-[500px] ">
      <div className="flex flex-col items-center w-full px-6 pt-16 space-y-4 border-r bg-gray-50">
        <span className="text-sm font-bold text-center sm:text-xl">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
};
