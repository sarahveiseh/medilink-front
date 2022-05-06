export const MedicalHistory = () => {
  const history = [
    { name: "نارسایی قلبی", type: "بیماری", since: "۳ سال " },
    { name: "نارسایی قلبی", type: "جراحی", since: "۲ سال " },
    { name: "دیابت", type: "بیماری", since: "۵ سال " },
  ];
  return (
    <div className="space-y-5 border border-gray-200 rounded-md shadow-sm p-7 ">
      {history?.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.type}</span>
          <span>{item.since}</span>
        </div>
      ))}
    </div>
  );
};
