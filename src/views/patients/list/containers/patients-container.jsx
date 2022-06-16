export const PatientsContainer = () => {
  return (
    <div className="w-full h-[80vh] grid grid-cols-1 border border-gray-50 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {[
        { name: "سارا", age: 23 },
        { name: "مدی", age: 24 },
        { name: "دکی", age: 25 },
        { name: "مدی", age: 26 },
        { name: "دکی", age: 27 },
        { name: "مدی", age: 28 },
        { name: "دکی", age: 43 },
        { name: "مدی", age: 56 },
        { name: "دکی", age: 25 },
        { name: "مدی", age: 26 },
        { name: "دکی", age: 27 },
        { name: "مدی", age: 28 },
        { name: "دکی", age: 43 },
      ].map((doctor) => (
        <div className="w-full h-[200px] py-10 px-5 border border-gray-200 rounded flex gap-5 hover:shadow-md hover:cursor-pointer">
          <div className="w-20 h-20 bg-blue-300 rounded-full shadow-sm ">
            آواتار
          </div>
          <div className="flex flex-col space-y-2 ">
            <div>نام: {doctor.name}</div>
            <div>سن: {doctor.age}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
