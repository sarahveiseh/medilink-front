export const Details = () => {
  return (
    <div className="grid grid-cols-3 gap-10 border border-gray-200 rounded-md shadow-sm p-7">
      <div className="w-24 h-24 bg-blue-200 rounded-full ">avatar</div>
      <div className="col-span-2 space-y-5 ">
        <div> نام</div>
        <div>سن</div>
        <div>جنسیت</div>
      </div>
    </div>
  );
};
