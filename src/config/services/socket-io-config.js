export const socketIoConfig = {
  reconnection: true,
  reconnectionAttempts: 1000,
  autoConnect: true,
  transports: ["websocket"],
  jsonp: false,
  forceNew: true,
};
