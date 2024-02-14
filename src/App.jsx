import routes from "./Routes/index";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      {router}
      <ToastContainer />
    </>
  );
}
