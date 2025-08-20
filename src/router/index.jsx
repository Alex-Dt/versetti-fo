import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { HomePage } from "../pages";
import { Jobs } from "../pages/Jobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
    ],
  },
]);
