import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/black-logo.png'
import { useContext, useState } from "react";

import useAuth from "../../hooks/useAuth";
import useEnroll from "../../hooks/useEnroll";
import LoadingSpinner from "./LoadingSpinner";
import useAdmin from "../../hooks/useAdmin";


const Header = () => {
      const location = useLocation()
      const { user, logOut,loading } = useAuth()
      const [isHovering, setIsHovering] = useState(false);
      const navigate = useNavigate();
      const [enrolls]=useEnroll()
      const [isAdmin]=useAdmin()
      console.log(isAdmin);

      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
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
                        {(user && !isAdmin) && <Link to="/dashboard/enrollCourse"
                              className={`${location?.pathname === '/dashboard/enrollCourse' ? 'active' : ""} relative mr-10`}>
                              <span>Enrollment</span>
                              <div className="badge top-0 -right-8 absolute bg-fuchsia-500 text-white">+{enrolls?.length}</div>
                        </Link>}
                  </li>
                  {
                        (isAdmin && user) && <li><Link to='/dashboard'>Dashboard</Link></li>
                  }
                  <li>{user && <button onClick={() => logOut().then(() => { navigate('/') })} className=" ">Logout</button>}</li>
            </>
      );

      return (
            <>
                  <div className="navbar  fixed md:px-[5%] bg-white text-black z-10 bg-base-100 border-b-2 shadow-lg">
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
                                    <img className="w-[200px]" src={logo} alt="Language Learning School" />
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">{navTabs}</ul>
                        </div>
                        <div className="navbar-end nav-item">
                              <ul>
                                    {
                                          user ? <>
                                                <div className=" relative">
                                                      {/* <img className=" rounded-full w-[70px]" src={user.photoURL} alt="" /> */}
                                                      <img
                                                            style={{ width: '60px', height: '60px' }}
                                                            className=' bg-slate-600 mr-5 rounded-full'
                                                            src={user?.photoURL}
                                                            alt='profile'
                                                            onMouseEnter={() => setIsHovering(true)}
                                                            onMouseLeave={() => setIsHovering(false)}
                                                      />
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
                              </ul>
                        </div>
                  </div>
            </>
      );
};

export default Header;
