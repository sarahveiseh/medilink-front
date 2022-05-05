import { STORAGE_KEYS } from "constants/local-storage-keys";
import { useLocalStorage } from "hooks/storage/use-local-storage";
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./state";

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const { setValue, storedValue } = useLocalStorage(
    STORAGE_KEYS.user,
    initialState,
  );
  const [state, dispatch] = useReducer(reducer, storedValue);

  useEffect(() => {
    //persist on change
    setValue(state);
  }, [setValue, state]);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
