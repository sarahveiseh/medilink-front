import {} from "./admin";
import {} from "./patient";
import {} from "./doctor";

const Dashboard = () => {
  const role = "admin";
  switch (role) {
    case "admin":
      return <div>admin</div>;

    default:
      return <div></div>;
  }
};

export default Dashboard;
