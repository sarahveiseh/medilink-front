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
           ${open ? " pl-[288px]" : " pl-20"}`}
      >
        <Header />
        <div className="w-full z-[10] pb-10 px-4 container mx-auto">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
