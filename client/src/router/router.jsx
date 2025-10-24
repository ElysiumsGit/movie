import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Favorite from "../pages/Favorite";

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
      {
        path: "favorite",
        element: <Favorite /> 
      },
    ]
  }
]);

export default router;
