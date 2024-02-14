import Login from "../Pages/Login/index";
import Todolist from "../Pages/Todolist/index";
let routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/todolist",
    element: <Todolist />,
  },
];
export default routes;
