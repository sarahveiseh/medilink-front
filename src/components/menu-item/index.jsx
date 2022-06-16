import { Button } from "components/button";
import { useHistory, useLocation } from "react-router-dom";

export const MenuItem = (props) => {
  const history = useHistory();
  const { icon, name, route } = props;
  const location = useLocation();
  const isSelected = location.pathname.includes(route);
  return (
    <Button
      icon
      onClick={() => history.push(route)}
      className="hover:scale-105">
      {isSelected ? (
        <div
          className={`flex flex-col items-center justify-center ${
            isSelected ? "font-semibold text-blue-500 text-sm space-y-1" : ""
          }`}>
          <span>{icon}</span>
          <span>{name}</span>
        </div>
      ) : (
        <span>{icon}</span>
      )}
    </Button>
  );
};
