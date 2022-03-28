import { useCallback, useContext } from "react";
import { UiContext, uiTypes } from "providers";

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext);
  const toggleDrawer = useCallback(() => {
    localStorage.setItem("drawer", String(!uiState.drawer.open));
    uiDispatch({ type: uiTypes.TOGGLE_DRAWER });
  }, [uiState.drawer.open]);

  const toggleDialog = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_DIALOG, payload }),
    [uiState.dialog]
  );

  const toggleToast = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_TOAST, payload }),
    [uiState.toast]
  );

  const toggleDark = useCallback(
    (payload) => {
      localStorage.setItem("dark", payload);
      uiDispatch({ type: uiTypes.TOGGLE_DARK, payload });
    },
    [uiState.dark]
  );

  return {
    uiState,
    toggleDrawer,
    toggleDialog,
    toggleToast,
    toggleDark,
  };
};
