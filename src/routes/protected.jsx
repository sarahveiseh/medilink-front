import { lazyWithRetry } from "components/lazy-with-retry";

export const protectedRoutes = [
  {
    path: "/admin",
    layout: "admin",
    component: lazyWithRetry(() => import("views/profile")),
  },
  {
    path: "/doctors/add",
    layout: "admin",
    component: lazyWithRetry(() => import("views/doctors/add-doctor/views")),
  },
  {
    path: "/doctors",
    layout: "admin",
    component: lazyWithRetry(() => import("views/doctors/list/views")),
  },
  {
    path: "/patients/add",
    layout: "admin",
    component: lazyWithRetry(() => import("views/patients/add-patients/views")),
  },
  {
    path: "/patients/details/:id",
    layout: "admin",
    component: lazyWithRetry(() => import("views/patients/details/views")),
  },
  {
    path: "/patients",
    layout: "admin",
    component: lazyWithRetry(() => import("views/patients/list/views")),
  },
  {
    path: "/chat/:conversationId",
    layout: "admin",
    component: lazyWithRetry(() => import("views/chat")),
  },
];

// export const protectedRoutes = [
//   {
//     path: "/fully-managed",
//     layout: "admin",
//     component: lazyWithRetry(() => import("views/fully-managed/fully-managed")),
//   },
//   {
//     path: "/environments",
//     layout: "admin",
//     sidebarName: "Environments_v2",
//     navbarName: "Environments_v2",
//     // icon: BorderOuter,
//     component: lazyWithRetry(() =>
//       import("views/environments_v2/environments")
//     ),
//     children: [
//       {
//         path: "/provider",
//         sidebarName: "Providers_v2",
//         navbarName: "Providers_v2",
//         // icon: CloudQueue,
//       },
//     ],
//   },
//   {
//     path: "/applications",
//     layout: "admin",
//     sidebarName: "Applications v2",
//     navbarName: "Applications v2",
//     // icon: Apps,
//     component: lazyWithRetry(() =>
//       import("views/applications_v3/applications")
//     ),
//     children: [
//       {
//         path: "/deployments",
//         sidebarName: "Deployments",
//         navbarName: "Deployments",
//         // eslint-disable-next-line react/display-name
//         // icon: (props) => (
//         //   <SvgIcon
//         //     component={DeploymentHistory}
//         //     viewBox="0 0 48 48"
//         //     {...props}
//         //   />
//         // ),
//       },
//       {
//         path: "/pipeline",
//         sidebarName: "Pipeline helper",
//         navbarName: "Pipeline helper",
//         // eslint-disable-next-line react/display-name
//         // icon: (props) => (
//         //   <SvgIcon
//         //     component={DeploymentHistory}
//         //     viewBox="0 0 48 48"
//         //     {...props}
//         //   />
//         // ),
//       },
//       {
//         path: "/mihelper",
//         sidebarName: "MI helper",
//         navbarName: "MI helper",
//         // eslint-disable-next-line react/display-name
//         // icon: (props) => (
//         //   <SvgIcon
//         //     component={DeploymentHistory}
//         //     viewBox="0 0 48 48"
//         //     {...props}
//         //   />
//         // ),
//       },
//     ],
//   },
//   {
//     path: "/kubernetes",
//     layout: "admin",
//     sidebarName: "Kubernetes",
//     navbarName: "Kubernetes",
//     // icon: BorderOuter,
//     component: lazyWithRetry(() => import("views/kubernetes/kubernetes")),
//   },
//   // {
//   //   path: '/automated-ops',
//   //   layout: 'admin',
//   //   sidebarName: 'Automated ops',
//   //   navbarName: 'Automated ops',
//   //   icon: ICBoundingBoxCircle,
//   //   component: lazyWithRetry(() => import('views/automated-ops/automated-ops')),
//   //   children: [
//   //     {
//   //       path: '/pipelines',
//   //       sidebarName: 'Pipelines',
//   //       navbarName: 'PipeLines',
//   //       icon: ICBoundingBoxCircle,
//   //     },
//   //   ],
//   // },
//   {
//     path: "/databases",
//     layout: "admin",
//     sidebarName: "Databases_v2",
//     navbarName: "Databases_v2",
//     // eslint-disable-next-line react/display-name
//     // icon: (props) => (
//     //   <SvgIcon component={Database} viewBox="0 0 1792 1792" {...props} />
//     // ),
//     component: lazyWithRetry(() => import("views/databases_v2/databases")),
//     children: [
//       {
//         path: "/sql",
//         sidebarName: "SQL tools",
//         navbarName: "SQL tools",
//         // eslint-disable-next-line react/display-name
//         // icon: (props) => (
//         //   <SvgIcon component={SQL} viewBox="0 0 256 256" {...props} />
//         // ),
//       },
//     ],
//   },
//   {
//     path: "/cache/redis",
//     layout: "admin",
//     sidebarName: "Redis",
//     navbarName: "Redis",
//     // icon: BorderOuter,
//     component: lazyWithRetry(() => import("views/cache/redis/redis")),
//   },
//   {
//     path: "/flash-setup",
//     layout: "admin",
//     sidebarName: "Flash Setup",
//     navbarName: "Flash Setup",
//     // icon: BorderOuter,
//     component: lazyWithRetry(() => import("views/flash-setup/flash-setup")),
//   },
//   {
//     path: "/analytics",
//     layout: "admin",
//     sidebarName: "Analytics",
//     navbarName: "Analytics",
//     // icon: BorderOuter,
//     component: lazyWithRetry(() => import("views/analytics/analytics")),
//   },
//   {
//     path: "/ssl",
//     sidebarName: "TLS/SSL certificates V2",
//     navbarName: "TLS/SSL certificates V2",
//     layout: "admin",
//     // eslint-disable-next-line react/display-name
//     // icon: (props) => (
//     //   <SvgIcon component={SSLIcon} viewBox="0 0 512 512" {...props} />
//     // ),
//     component: lazyWithRetry(() =>
//       import("views/ssl-certificates_v2/certificates")
//     ),
//   },
//   {
//     path: "/monitoring",
//     layout: "admin",
//     sidebarName: "Monitoring",
//     navbarName: "Monitoring",
//     // eslint-disable-next-line react/display-name
//     // icon: (props) => (
//     //   <SvgIcon component={MonitoringIcon} viewBox="0 0 32 32" {...props} />
//     // ),
//     component: lazyWithRetry(() => import("views/monitoring/monitoring")),
//     children: [
//       // {
//       //   path: "/resources",
//       //   sidebarName: "Resources",
//       //   navbarName: "Resources",
//       //   icon: ArrowForward,
//       // },
//       {
//         path: "/metrics",
//         sidebarName: "Metrics",
//         navbarName: "Metrics",
//         // icon: Poll,
//       },
//       {
//         path: "/alarms",
//         sidebarName: "Alarms",
//         navbarName: "Alarms",
//         // icon: NotificationsActiveIcon,
//       },
//       {
//         path: "/incident",
//         sidebarName: "Incident",
//         navbarName: "Incident",
//         // icon: NotificationsActiveIcon,
//       },
//       {
//         path: "/notifications",
//         sidebarName: "Notifications",
//         navbarName: "Notifications",
//         // icon: NotificationsActiveIcon,
//       },
//       {
//         path: "/logs",
//         sidebarName: "Logs",
//         navbarName: "Logs",
//         // eslint-disable-next-line react/display-name
//         // icon: (props) => (
//         //   <SvgIcon component={LogIcon} viewBox="0 0 512 512" {...props} />
//         // ),
//       },
//     ],
//   },
//   {
//     path: "/secrets",
//     layout: "admin",
//     sidebarName: "Secrets",
//     navbarName: "Secrets",
//     // icon: Fingerprint,
//     component: lazyWithRetry(() => import("views/Secrets/Secrets")),
//   },
//   {
//     path: "/user-management",
//     layout: "admin",
//     sidebarName: "User management",
//     navbarName: "User managements",
//     // icon: Dashboard,
//     component: lazyWithRetry(() =>
//       import("views/UserManagement/UserManagement")
//     ),
//     children: [
//       {
//         path: "/users",
//         sidebarName: "Users",
//         navbarName: "Users",
//         // icon: Dashboard,
//       },
//       {
//         path: "/groups",
//         sidebarName: "Groups",
//         navbarName: "Groups",
//         // icon: Dashboard,
//       },
//       {
//         path: "/service_accounts",
//         sidebarName: "Service account",
//         navbarName: "Service account",
//         // icon: Dashboard,
//       },
//       {
//         path: "/policies",
//         sidebarName: "Policies",
//         navbarName: "Policies",
//         // icon: Dashboard,
//       },
//     ],
//   },
//   {
//     path: "/integrations",
//     layout: "admin",
//     sidebarName: "Integrations",
//     navbarName: "Integrations",
//     // icon: SettingsInputComposite,
//     component: lazyWithRetry(() => import("views/Integrations/Integrations")),
//   },
//   {
//     path: "/audit",
//     layout: "admin",
//     sidebarName: "Audit",
//     navbarName: "Audit",
//     // icon: RecentActorsIcon,
//     component: lazyWithRetry(() => import("views/Audit/audit")),
//     children: [
//       {
//         path: "/login-history",
//         sidebarName: "Login history",
//         navbarName: "Login history",
//         // icon: RecentActorsIcon,
//       },
//       {
//         path: "/audit-manager",
//         sidebarName: "Audit manager",
//         navbarName: "Audit manager",
//         // icon: RecentActorsIcon,
//       },
//     ],
//   },
//   {
//     path: "/profile",
//     layout: "admin",
//     component: lazyWithRetry(() => import("views/profile/profile")),
//   },
//   {
//     path: "/dashboard",
//     layout: "admin",
//     component: lazyWithRetry(() => import("views/dashboard/views")),
//   },
//   {
//     redirect: true,
//     path: "/",
//     to: "/fully-managed/applications",
//     navbarName: "Redirect",
//   },
// ];
