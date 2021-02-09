import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import(
        "../components/page/home/HomePage" /* webpackChunkName: "HomePage"*/
      )
    ),
  },
  {
    path: "/register",
    name: "Registr",
    exact: false,
    component: lazy(() =>
      import(
        "../components/page/register/RegistrPage" /* webpackChunkName: "RegistrPage"*/
      )
    ),
  },
  {
    path: "/login",
    name: "Login",
    exact: false,
    component: lazy(() =>
      import(
        "../components/page/login/LoginPage" /* webpackChunkName: "LoginPage"*/
      )
    ),
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: false,
    component: lazy(() =>
      import(
        "../components/page/contacts/ContactsPage" /* webpackChunkName: "ContactsPage"*/
      )
    ),
  },
];

export { mainRoutes };

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
