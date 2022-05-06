export const Prescriptions = () => {
  const prescriptions = [
    { detail: "kudsfkhfjshdfkjshdfks", from: "x doctor" },
    { detail: "kudsfkhfjshdfkjshdfks", from: "x doctor" },
    { detail: "kudsfkhfjshdfkjshdfks", from: "x doctor" },
  ];
  return (
    <div className="space-y-5 border border-gray-200 rounded-md shadow-sm p-7">
      {prescriptions?.map((item, index) => (
        <div className="p-5 bg-blue-200 rounded" key={index}>
          <div>{item.detail}</div>
          <div>{item.from}</div>
        </div>
      ))}
    </div>
  );
};
