import { Button } from "components/button";
import { ICPlus } from "icons/plus";
import { Link, useHistory } from "react-router-dom";

export const AddPatient = () => {
  const { push } = useHistory();
  return (
    <div className=" w-full flex justify-end">
      <Link to="/patients/add">
        <Button
          icon
          tooltip="بیمار جدید اضافه کنید"
          onClick={() => push("/patients/add")}
        >
          <ICPlus className="w-8 h-8 text-blue-300" />
        </Button>
      </Link>
    </div>
  );
};
