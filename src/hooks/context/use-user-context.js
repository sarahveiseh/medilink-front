import { UserContext } from "providers/user-provider";
import { useContext } from "react";

export const useUserContext = () => {
  const { dispatch: dispatchUser, state: userState } = useContext(UserContext);
  return { dispatchUser, userState };
};
