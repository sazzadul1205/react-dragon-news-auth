import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import NewsPage from "../Pages/Home/NewsPage/NewsPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsPage></NewsPage></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default routes;