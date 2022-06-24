const { useUserContext } = require("hooks/context/use-user-context");

export const useRole = () => {
  const { userState } = useUserContext();

  return null;
};
