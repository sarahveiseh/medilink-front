import { useLocation } from "react-router-dom";

/**
 * A custom hook that builds on useLocation to parse the query string.
 */
export const useSearchParams = () => {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  return Object.fromEntries(urlSearchParams.entries());
};
