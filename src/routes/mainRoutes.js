import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../page/home/HomePage" /* webpackChunkName: "HomePage"*/)
    ),
    isPrivate: false,
    restricted: false,
  },

  {
    path: "/contacts",
    name: "Contacts",
    exact: false,
    component: lazy(() =>
      import(
        "../page/contacts/ContactsPage" /* webpackChunkName: "ContactsPage"*/
      )
    ),
    isPrivate: true,
    restricted: false,
  },
  {
    path: "/signup",
    name: "Registration",
    exact: false,
    component: lazy(() =>
      import(
        "../page/register/RegistrPage" /* webpackChunkName: "RegistrPage"*/
      )
    ),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/signin",
    name: "Login",
    exact: false,
    component: lazy(() =>
      import("../page/login/LoginPage" /* webpackChunkName: "LoginPage"*/)
    ),
    isPrivate: false,
    restricted: true,
  },
];

export { mainRoutes };

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
