import { Router } from "./router";

import { UiProvider } from "providers/ui-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from "providers/user-provider";
import { reactQueryConfig } from "config/services/react-query";
import { ToastContainer } from "react-toastify";
import { SocketContextProvider } from "providers/socket-provider";

const client = new QueryClient(reactQueryConfig);

export const App = () => {
  return (
    <QueryClientProvider client={client}>
      <SocketContextProvider>
        <UserProvider>
          <UiProvider>
            <Router />
            <ToastContainer rtl bodyStyle={{ fontFamily: "IRANSans" }} />
          </UiProvider>
        </UserProvider>
      </SocketContextProvider>

      <ReactQueryDevtools initialIsOpen={false} position="top-left" />
    </QueryClientProvider>
  );
};
