import { PatientsProfile } from "./containers/patients";
import { DoctorProfile } from "./containers/doctor";

const Index = () => {
  const role = "patient";
  switch (role) {
    case "patient":
      return <PatientsProfile />;
    case "doctor":
      return <DoctorProfile />;
    default:
      return null;
  }
};

export default Index;
