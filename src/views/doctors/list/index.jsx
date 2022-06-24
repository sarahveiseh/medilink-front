import { useRole } from "hooks";
import { AddDoctor, DoctorsContainer } from "./containers";

const Index = () => {
  const role = useRole();
  switch (role) {
    case "admin":
      return (
        <div className="space-y-5">
          <AddDoctor />
          <DoctorsContainer />
        </div>
      );
    case "doctor":
      return (
        <div className="space-y-5">
          <AddDoctor />
          <DoctorsContainer />
        </div>
      );
    case "patient":
      return (
        <div className="space-y-5">
          <AddDoctor />
          <DoctorsContainer />
        </div>
      );
    default:
      return null;
  }
};

export default Index;
