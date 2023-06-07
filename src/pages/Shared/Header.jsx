import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/black-logo.png'
import { useState } from "react";

const Header = () => {
      const location = useLocation()
      const navTabs = (
            <>
                  <li>
                        <Link  to="/"
                         className={`${location?.pathname ==='/'?'active':""}`}>
                              Home
                        </Link>
                  </li>
                  <li>
                        <Link  to="/instructors"
                        className={`${location?.pathname ==='/instructors'?'active':""}`} >
                              Instructors
                        </Link>
                  </li>
                  <li>
                        <Link to="/classes"
                        className={`${location?.pathname ==='/classes'?'active':""}`} >
                              Classes
                        </Link>
                  </li>
                  <li>
                        <Link to="/dashboard" 
                        className={`${location?.pathname ==='/dashboard'?'active':""}`}>
                              Dashboard
                        </Link>
                  </li>
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
                              <li> <Link
                              
                               to="/login" 
                               className={`${location?.pathname ==='/login'?' active':''} px-3 py-2 rounded-md`}
                               >
                                    Login
                              </Link></li>
                             </ul>
                        </div>
                  </div>
            </>
      );
};

export default Header;
