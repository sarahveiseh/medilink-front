import { ResponsiveLayout } from "layouts/responsive";

const Index = () => {
  const role = "admin";
  switch (role) {
    case "admin":
      return <div></div>;
    default:
      return null;
  }
};

export default Index;
