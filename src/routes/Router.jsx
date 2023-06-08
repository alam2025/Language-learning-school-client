import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Courses from "../pages/Courses/Courses";

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
                  },
                  {
                        path:'register',
                        element:<Registration></Registration>
                  },
                  {
                        path:'courses',
                        element:<Courses></Courses>
                  }
            ]
      }
])
export default router;