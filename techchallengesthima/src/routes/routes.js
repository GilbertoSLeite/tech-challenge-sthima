import React from "react";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("../pages/Main/Main")),
  },
  /*{
    path: "/statistics",
    component: React.lazy(() => import("./statistics")),
  },
  {
    path: "/comment",
    component: React.lazy(() => import("./comment")),
  },
  {
    path: "(.*)",
    component: React.lazy(() => import("./error")),
  },*/
];

export default routes;
