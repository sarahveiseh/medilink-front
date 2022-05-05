import { Footer } from "containers/footer";
import { AdminDashboard } from "containers/dashboards/admin-dashboard";
import { Header } from "containers/header";
import { useUi } from "hooks/use-ui";
import { useLocation } from "react-router-dom";

export const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();
  const {
    uiState: {
      drawer: { open },
    },
  } = useUi();

  if (pathname.includes("auth"))
    return <div className="w-full h-full">{children}</div>;

  return (
    <div className="overflow-y-auto scrollbar-hide overflow-x-hidden bg-light flex min-h-screen">
      <AdminDashboard />

      <div
        className={`w-full  flex flex-col h-auto transition-padding transition-padding duration-500 ease-in-out 
           ${open ? " pr-[288px]" : " pr-20"}`}>
        {children}
      </div>
    </div>
  );
};
