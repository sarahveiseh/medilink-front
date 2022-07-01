import { PatientRegister } from "../containers/patients";
import { DoctorRegister } from "../containers/doctors";
import { useSearchParams } from "hooks/use-search-params";

const Index = () => {
  const { role } = useSearchParams();
  switch (role) {
    case "doctor":
      return <DoctorRegister />;
    case "patient":
      return <PatientRegister />;
    default:
      return null;
  }
};

export default Index;
