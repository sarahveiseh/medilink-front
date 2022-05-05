import { SocketContext } from "providers/socket-provider";
import { useContext } from "react";

export const useSocketContext = () => {
  const socket = useContext(SocketContext);
  return socket;
};
