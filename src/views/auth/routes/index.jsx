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
  {
    path: "/set_password",
    component: lazyWithRetry(() => import("../set-password/views")),
  },
  {
    path: "/forgot_password",
    component: lazyWithRetry(() => import("../forgot-password/views")),
  },
  {
    path: "/reset_password",
    component: lazyWithRetry(() => import("../reset-password/views")),
  },
  {
    path: "/verify",
    component: lazyWithRetry(() => import("../verify-email/views")),
  },
  {
    path: "/login",
    component: lazyWithRetry(() => import("../login/views")),
  },
];

export default authRoutes;
