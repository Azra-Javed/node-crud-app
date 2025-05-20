import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },

    {
      path: "/create",
      element: <CreateUser />,
    },

    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
