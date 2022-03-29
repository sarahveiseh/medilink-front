import { Button } from "components/button";
import { ICPlus } from "icons/plus";
import { Link, useHistory } from "react-router-dom";

export const AddDoctor = () => {
  const { push } = useHistory();
  return (
    <div className=" w-full flex justify-end">
      <Link to="/doctors/add">
        <Button
          icon
          tooltip="دکتر جدید اضافه کنید"
          onClick={() => push("/doctors/add")}
        >
          <ICPlus className="w-8 h-8 text-blue-300" />
        </Button>
      </Link>
    </div>
  );
};
