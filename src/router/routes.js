const routes = [
  {
    path: "/homepage",
    name: "homepage",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../pages/FormPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
