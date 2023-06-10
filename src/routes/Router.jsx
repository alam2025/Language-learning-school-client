import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Courses from "../pages/Courses/Courses";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AdminHome from "../Dashboard/AdminDashboard/AdminHome";
import ManageCourse from "../Dashboard/AdminDashboard/ManageCourse";
import ManageUsers from "../Dashboard/AdminDashboard/ManageUsers";
import EnrollCourse from "../Dashboard/UserDashboard/EnrollCourse";
import InstructorHome from "../Dashboard/InstructorDashboard/InstructorHome";
import SelectedCourses from "../Dashboard/InstructorDashboard/SelectedCourses";
import Payment from "../Dashboard/UserDashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/UserDashboard/Payment/PaymentHistory";
import AddClass from "../Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Dashboard/InstructorDashboard/MyClasses/MyClasses";
// import Enrolled from "../Dashboard/InstructorDashboard/Enrolled/Enrolled";

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
      },
      {
            path:'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                  {
                        path:'adminhome',
                        element:<AdminHome></AdminHome>
                  },
                  {
                        path:'courses',
                        element:<ManageCourse></ManageCourse>
                  },
                  {
                        path:'users',
                        element:<ManageUsers></ManageUsers>
                  },
                  {
                        path:'enrolCoourses',
                        element:<EnrollCourse></EnrollCourse>
                  },
                  {
                        path:'paymentHistory',
                        element:<PaymentHistory></PaymentHistory>

                  },
                  {
                        path:'selected-courses',
                        element:<SelectedCourses></SelectedCourses>
                  },
                  {
                        path:'payment',
                        element:<Payment></Payment>
                  },
                  {
                        path:'instructorhome',
                        element:<InstructorHome></InstructorHome>
                  },
                  {
                        path:'addRoom',
                        element:<AddClass></AddClass>
                  },
                  {
                        path:'myClasses',
                        element:<MyClasses></MyClasses>
                  },
                 
            ]
      }
])
export default router;