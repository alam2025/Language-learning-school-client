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
import UpdateClass from "../Dashboard/InstructorDashboard/AddClass/UpdateClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import UserHome from "../Dashboard/UserDashboard/Payment/UserHome/UserHome";
import UserProfile from "../Dashboard/UserDashboard/UserProfile/UserProfile";
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
                  },
                  {
                        path:'userProfile',
                        element:<UserProfile></UserProfile>
                  }
            ]
      },
      {
            path:'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                  // ------admin routes -----------
                  {
                        path:'adminhome',
                        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
                  },
                  {
                        path:'courses',
                        element:<AdminRoute><ManageCourse></ManageCourse></AdminRoute>
                  },
                  {
                        path:'users',
                        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                  },

                  //..................... users routes .......
                  {
                       path:'userHome',
                       element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
                  },
                  {
                        path:'enrolCoourses',
                        element:<PrivateRoute><EnrollCourse></EnrollCourse></PrivateRoute>
                  },
                  {
                        path:'paymentHistory',
                        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>

                  },
                  {
                        path:'selected-courses',
                        element:<PrivateRoute><SelectedCourses></SelectedCourses></PrivateRoute>
                  },
                  {
                        path:'payment',
                        element:<PrivateRoute><Payment></Payment></PrivateRoute>
                  },
                  // -----------instructors routes -----------
                  {
                        path:'instructorhome',
                        element:<InstructorHome></InstructorHome>
                  },
                  {
                        path:'addClass',
                        element:<AddClass></AddClass>
                  },
                  {
                        path:'myClasses',
                        element:<MyClasses></MyClasses>
                  },
                  {
                        path:'updateClass/:id',
                        element:<UpdateClass/>
                  }
                 
            ]
      }
])
export default router;