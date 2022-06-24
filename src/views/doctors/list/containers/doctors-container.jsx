import { useGetAllDoctors } from "services";

export const DoctorsContainer = () => {
  const { isLoading, isError, data } = useGetAllDoctors();

  //TODO : handle isLoading isError

  return (
    <div className="w-full p-2 grid grid-cols-1  bg-white sm:grid-cols-2 md:grid-cols-3 gap-5">
      {data?.result?.map((doctor) => (
        <div className="duration-150 flex w-full gap-5 px-5 py-10 border border-gray-200 rounded hover:shadow-md hover:cursor-pointer">
          <div className="w-20 h-20 bg-blue-300 rounded-full shadow-sm ">
            آواتار
          </div>
          <div className="flex flex-col space-y-2 ">
            <div>
              نام: {doctor?.firstName} {doctor?.lastName}
            </div>
            <div className="flex items-center">
              تاریخ تولد: <p>{doctor.dateOfBirth}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
