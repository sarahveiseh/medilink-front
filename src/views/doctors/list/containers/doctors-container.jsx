export const DoctorsContainer = () => {
  return (
    <div className="w-full h-[80vh] grid grid-cols-1 border border-gray-50 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-auto">
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
        <div className="w-full py-10 px-5 border border-gray-200 rounded flex gap-5 hover:shadow-md hover:cursor-pointer">
          <div className="w-20 h-20 rounded-full bg-blue-300 shadow-sm overflow-hidden">
            آواتار
          </div>
          <div className=" flex flex-col space-y-2">
            <div>نام: {doctor.name}</div>
            <div>سن: {doctor.age}</div>
            <div>تخصص: {doctor.specialty}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
