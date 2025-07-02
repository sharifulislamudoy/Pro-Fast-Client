import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import login from "../Pages/login";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ]
  },
  {
    path: '/auth',
    Component: AuthenticationLayout,
    children: [
      {
        path: 'login',
        Component: login,
      },
      {
        path: 'registration',
        Component: Registration,
      }
    ]
  }
]);