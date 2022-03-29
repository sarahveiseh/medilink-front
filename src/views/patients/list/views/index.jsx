import { PatientsContainer, AddPatient } from "../containers";

const Index = () => {
  const role = "admin";
  switch (role) {
    case "admin":
      return (
        <div className="space-y-5">
          <AddPatient />
          <PatientsContainer />
        </div>
      );
    default:
      return null;
  }
};

export default Index;
