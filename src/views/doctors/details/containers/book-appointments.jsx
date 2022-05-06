import { Button } from "components";
import { useState } from "react";
export const BookAppointments = () => {
  const [selected, setSelected] = useState("");
  const time = [
    {
      date: new Date(),
      appointments: [
        { stat: "-", end: "-", isTaken: false, id: "15" },
        { stat: "-", end: "-", isTaken: true, id: "14" },
        { stat: "-", end: "-", isTaken: false, id: "13" },
      ],
    },
    {
      date: new Date(),
      appointments: [
        { stat: "-", end: "-", isTaken: true, id: "12" },
        { stat: "-", end: "-", isTaken: false, id: "11" },
      ],
    },
    {
      date: new Date(),
      appointments: [{ id: "10", stat: "-", end: "-", isTaken: true }],
    },
  ];
  return (
    <div className="space-y-5 border border-gray-200 rounded-md shadow-sm p-7">
      {time?.map((day, index) => (
        <div key={index} className="space-y-2">
          <div>{day.date.toDateString()}</div>
          <div className="flex justify-around p-3 space-x-3">
            {day.appointments?.map((p, index) => (
              <Button
                onClick={() => {
                  if (selected === p.id) setSelected("");
                  else setSelected(p.id);
                }}
                key={index}
                className={`rounded-md ${
                  p.isTaken ? "bg-gray-200" : "bg-blue-200 hover:shadow"
                }
                ${selected === p.id && "scale-x-105"}`}
                tooltip={
                  p.isTaken
                    ? "این زمان توسط بیمار دیگری انتخاب شده"
                    : "برای انتخاب کلیک کنید"
                }
              >
                {day.stat}-{day.end}
              </Button>
            ))}
          </div>
        </div>
      ))}
      {selected !== "" && (
        <Button className="w-40 text-white bg-blue-400">ذخیره</Button>
      )}
    </div>
  );
};
