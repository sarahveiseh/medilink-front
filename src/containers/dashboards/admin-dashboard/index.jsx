import { Drawer } from "components/drawer";
import { useUi } from "hooks";
import { useState } from "react";
import { AdminDashboardClose } from "./admin-dashboard-close";
import { AdminDashboardOpen } from "./admin-dashboard-open";
import { AdminDashboardToggle } from "./toggle";

export const AdminDashboard = () => {
  const {
    uiState: {
      drawer: { open },
    },
    toggleDrawer,
  } = useUi();

  const [element, setElement] = useState("");
  const [position, setPosition] = useState([]);

  return (
    <Drawer
      setElement={setElement}
      element={element}
      position={position}
      open={open}
    >
      {open ? (
        <AdminDashboardOpen />
      ) : (
        <AdminDashboardClose
          setElement={setElement}
          setPosition={setPosition}
        />
      )}
      <AdminDashboardToggle toggleDrawer={toggleDrawer} open={open} />
    </Drawer>
  );
};
