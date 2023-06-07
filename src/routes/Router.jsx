import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main />,
            errorElement:<ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: 'instructors',
                        element: <Instructors />
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  }
            ]
      }
])
export default router;