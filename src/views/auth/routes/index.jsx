import { lazyWithRetry } from "components/lazy-with-retry";

const authRoutes = [
  {
    path: "/login",
    component: lazyWithRetry(() => import("../login-form/views")),
  },
];

export default authRoutes;
