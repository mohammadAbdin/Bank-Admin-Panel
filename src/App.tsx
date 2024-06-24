import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddUser from "./Components/AddUser";
import { UserProvider } from "./Context/UsersContext";
import { UserManagmentProvider } from "./Context/UserManagmentContext";
import User from "./Pages/UserIssues/User";
import NavigationMenu from "./Components/NavigationMenu";

const links = [
  { label: "Users", href: "/" },
  { label: "Transactions", href: "#" },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationMenu links={links} />,
    children: [
      {
        index: true,
        element: (
          <UserProvider>
            <Home />
          </UserProvider>
        ),
      },
      {
        path: "/Add-User",
        element: (
          <UserProvider>
            <AddUser todo="Add User" button="Add User" />,
          </UserProvider>
        ),
      },
      {
        path: "/User/:userId",
        element: (
          <UserManagmentProvider>
            <User />
          </UserManagmentProvider>
        ),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
