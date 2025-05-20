import { Navigate, createBrowserRouter } from "react-router";
import { usersRouter } from "../../../users/infrastructure/router/users.router";
import { PATH_NAMES } from "../../domain/schemas/pathnames.schema";
import { MainLayout } from "../../presentation/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to={PATH_NAMES.HOME} />,
  },
  {
    path: PATH_NAMES.HOME,
    element: <MainLayout />,
    children: [
      {
        path: PATH_NAMES.USERS,
        children: [usersRouter],
      },
    ],
  },
]);
