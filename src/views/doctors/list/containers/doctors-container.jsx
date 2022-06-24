import { useGetPatientDoctors } from "services";

export const DoctorsContainer = () => {
  const { isLoading, isError, data } = useGetPatientDoctors();

  return (
    <div className="w-full h-[80vh] grid grid-cols-1 border border-gray-50 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {[
        { name: "دکی", age: 43, specialty: "کودکان" },
        { name: "مدی", age: 56, specialty: "قلب" },
        { name: "دکی", age: 43, specialty: "کودکان" },
        { name: "مدی", age: 56, specialty: "قلب" },
        { name: "دکی", age: 43, specialty: "کودکان" },
        { name: "مدی", age: 56, specialty: "قلب" },
        { name: "دکی", age: 43, specialty: "کودکان" },
        { name: "مدی", age: 56, specialty: "قلب" },
      ].map((doctor) => (
        <div className="flex w-full gap-5 px-5 py-10 border border-gray-200 rounded hover:shadow-md hover:cursor-pointer">
          <div className="w-20 h-20 bg-blue-300 rounded-full shadow-sm ">
            آواتار
          </div>
          <div className="flex flex-col space-y-2 ">
            <div>نام: {doctor.name}</div>
            <div>سن: {doctor.age}</div>
            <div>تخصص: {doctor.specialty}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
