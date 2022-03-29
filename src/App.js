import { Router } from "./router";
import { Provider } from "react-redux";
import store from "redux/store";
import { UiProvider } from "providers/ui-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const App = () => (
  <div className=" scrollbar-hide">
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <UiProvider>
          <Router />
        </UiProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </div>
);
