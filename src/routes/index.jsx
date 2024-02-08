import Login from "../pages/Login/index";
import Todolist from "../pages/Todolist/index";
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
