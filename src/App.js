import { Router } from "./router";
import { Provider } from "react-redux";
import store from "redux/store";
import { UiProvider } from "providers/ui-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from "providers/user-provider";
import { reactQueryConfig } from "config/services/react-query";
import { ToastContainer } from "react-toastify";

const client = new QueryClient(reactQueryConfig);

export const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <UserProvider>
          <UiProvider>
            <Router />
            <ToastContainer rtl bodyStyle={{ fontFamily: "IRANSans" }} />
          </UiProvider>
        </UserProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};
