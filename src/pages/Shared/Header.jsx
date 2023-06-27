import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/black-logo.png'
import logo2 from '../../assets/logo.png'
import { useContext, useState } from "react";

import useAuth from "../../hooks/useAuth";
import useEnroll from "../../hooks/useEnroll";
import LoadingSpinner from "./LoadingSpinner";
import useAdmin from "../../hooks/useAdmin";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../hooks/useCart";
import isInstructor from "../../hooks/isInstructor";


const Header = ({ toggleTheme,theme }) => {
      const location = useLocation()
      const { user, logOut, loading } = useAuth()
      const [isHovering, setIsHovering] = useState(false);
      const navigate = useNavigate();
      const [selectedCourse] = useCart()
      const [isAdmin, isAdminLoading] = useAdmin();
      const [itInstructor, itInstructorLoading] = isInstructor();
      console.log(user);


      if (loading) {
            return <LoadingSpinner></LoadingSpinner>
      }

      // console.log(selectedCourse);
      const navTabs = (
            <>
                  <li>
                        <Link to="/"
                              className={`${location?.pathname === '/' ? 'active' : ""}`}>
                              Home
                        </Link>
                  </li>
                  <li>
                        <Link to="/instructors"
                              className={`${location?.pathname === '/instructors' ? 'active' : ""}`} >
                              Instructors
                        </Link>
                  </li>
                  <li>
                        <Link to="/courses"
                              className={`${location?.pathname === '/courses' ? 'active' : ""}`} >
                              Courses
                        </Link>
                  </li>
                  <li>
                        {(user && !isAdmin && !itInstructor) && <Link to="/dashboard/selected-courses"
                              className={`${location?.pathname === '/dashboard/enrollCourse' ? 'active' : ""} relative mr-10`}>
                              <span><AiOutlineShoppingCart /></span>
                              <div className="badge top-0 -right-8 absolute bg-fuchsia-500 text-white">+{selectedCourse?.length}</div>
                        </Link>}
                  </li>
                  {
                        (isAdmin && user && !itInstructor) && <li><Link to='/dashboard/adminhome'>Dashboard</Link></li>
                  }
                  {
                        (itInstructor && user && !isAdmin) && <li><Link to='/dashboard/instructorhome'>Dashboard</Link></li>
                  }
                 

            </>
      );

      return (
            <>
                  <div className={`navbar z-10 md:px-[5%] bg-white text-black  bg-base-100 border-b-2 shadow-lg ${theme === 'light' ? 'light' : 'dark'}`}>
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16"
                                                />
                                          </svg>
                                    </label>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
                                    >
                                          {navTabs}
                                    </ul>
                              </div>
                              <Link to="/">
                                    {
                                          theme ==='dark'?<img className="w-[200px]" src={logo2}></img>:<img className="w-[200px]" src={logo} alt="Language Learning School" />
                                    }
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">{navTabs}</ul>
                        </div>
                        <div className="navbar-end nav-item">
                              <ul className="flex gap-4 items-center">
                                    {
                                          user ? <>
                                                <div className=" relative">
                                                      {/* <img className=" rounded-full w-[70px]" src={user.photoURL} alt="" /> */}
                                                      <Link to='/userProfile'>
                                                            <img
                                                                  style={{ width: '60px', height: '60px' }}
                                                                  className=' bg-slate-600 mr-5 rounded-full'
                                                                  src={user?.photoURL}
                                                                  alt='profile'
                                                                  onMouseEnter={() => setIsHovering(true)}
                                                                  onMouseLeave={() => setIsHovering(false)}
                                                            />
                                                      </Link>
                                                      <h6 style={{ width: '120px', marginLeft: '-30px', top: '70px', fontWeight: '700' }} className={`hover-display-name py-2 rounded  absolute text-white pl-2 text-sm bg-black ${isHovering ? ' block' : ' hidden'}`}>
                                                            {user.displayName}
                                                      </h6>
                                                </div>

                                          </> : <>
                                                <li> <Link

                                                      to="/login"
                                                      className={`${location?.pathname === '/login' ? ' active' : ''} px-3 py-2 rounded-md`}
                                                >
                                                      Login
                                                </Link></li>
                                          </>

                                    }
                                   
                                    <label className="swap swap-rotate">

                                          {/* this hidden checkbox controls the state */}
                                          <input onClick={toggleTheme} type="checkbox" />

                                           {/* moon icon */}
                                           <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                          {/* sun icon */}
                                          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                         

                                    </label>
                              </ul>
                        </div>
                  </div>
            </>
      );
};

export default Header;
