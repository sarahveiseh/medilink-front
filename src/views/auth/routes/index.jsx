import { lazyWithRetry } from "components/lazy-with-retry";

const authRoutes = [
  {
    path: "/login",
    component: lazyWithRetry(() => import("../login-form/views")),
  },
  {
    path: "/register",
    component: lazyWithRetry(() => import("../register/views")),
  },
];

export default authRoutes;
