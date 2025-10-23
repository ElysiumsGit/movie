import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

const router = createBrowserRouter([
  {   
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home /> 
      },
      {
        path: "movies",
        element: <Movies /> 
      },

    ]
  }
]);

export default router;
