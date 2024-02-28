import Login from "../Pages/Login/index";
import Todolist from "../Pages/Todolist/index";
import Signup from "../Pages/Signup/index";
let routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/todolist",
    element: <Todolist />,
  },
  {
    path: "/signup",
    element: <Signup />
  }
];
export default routes;
