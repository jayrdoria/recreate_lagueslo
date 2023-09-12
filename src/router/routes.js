const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../pages/HomePage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
