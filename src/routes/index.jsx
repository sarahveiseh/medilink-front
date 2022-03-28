import { lazyWithRetry } from "components/lazy-with-retry";
import MainLayout from "layouts/Main/Main";

export const indexRoutes = [
  {
    path: "/auth",
    component: lazyWithRetry(() => import("views/auth/login-form/views")),
    isPublic: true,
  },
  {
    path: "/",
    component: MainLayout,
  },
];
