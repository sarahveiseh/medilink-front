export const FormWrapper = ({
  title,
  children,
  className = '',
  childrenClass = '',
  isLoading = false,
}) => {
  return (
    <div
      className={`w-full bg-white border rounded h-auto flex flex-col  ${className}`}
    >
      <div className="rounded-t h-[47px] bg-white text-black text-[18px] font-semibold w-full flex justify-start items-center pl-[34px] border-b  ">
        <span className={isLoading ? 'animate-pulse200' : ''}>{title}</span>
      </div>
      <div className={`pt-[34px] px-[34px] mb-[30px] ${childrenClass}`}>
        {children}
      </div>
    </div>
  )
}
