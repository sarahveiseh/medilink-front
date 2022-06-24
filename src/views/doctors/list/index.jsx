import { useUserContext } from "hooks";
import { AddDoctor, DoctorsContainer } from "./containers";

const Index = () => {
  const role = "admin";
  const { userState } = useUserContext();
  console.log(userState);
  switch (role) {
    case "admin":
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
