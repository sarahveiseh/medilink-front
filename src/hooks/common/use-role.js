const { useUserContext } = require("hooks/context/use-user-context");

export const useRole = () => {
  const { userState } = useUserContext();

  if (userState?.user?.user?.isAdmin) return "admin";
  if (userState?.user?.user?.type === 1) return "doctor";
  if (userState?.user?.user?.type === 2) return "patient";

  return "";
};
