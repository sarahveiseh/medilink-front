import React from "react";
import { io } from "socket.io-client";
import { socketIoConfig } from "config/services/socket-io-config";
import { STORAGE_KEYS } from "constants/local-storage-keys";

const SOCKET_URL = process.env["REACT_APP_SOCKET_END_POINT"] || "";

//get token from local-storage
const token = JSON.parse(localStorage.getItem(STORAGE_KEYS.user))?.user?.token;
const socket = io(SOCKET_URL, {
  reconnectionDelayMax: 10000,
  query: {
    token,
  },
  ...socketIoConfig,
});

export const SocketContext = React.createContext(socket);

export const SocketContextProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
