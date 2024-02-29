import Login from "../Pages/Login/index";
import Todolist from "../Pages/Todolist/index";
import Signup from "../Pages/Signup/index";
import ForgotPassword from "../Pages/ForgetPassword/index"

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
  },
  {
    path: "/forgetpassword",
    element: <ForgotPassword />
  }
];
export default routes;
