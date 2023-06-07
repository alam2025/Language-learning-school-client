import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
      const navTabs = (
            <>
                  <li>
                        <NavLink exact to="/" activeClassName="active-link">
                              Home
                        </NavLink>
                  </li>
                  <li>
                        <NavLink exact to="/instructors" activeClassName="active-link">
                              Instructors
                        </NavLink>
                  </li>
                  <li>
                        <NavLink to="/classes" activeClassName="active-link">
                              Classes
                        </NavLink>
                  </li>
                  <li>
                        <NavLink to="/dashboard" activeClassName="active-link">
                              Dashboard
                        </NavLink>
                  </li>
            </>
      );

      return (
            <>
                  <div className="navbar fixed md:px-[5%] bg-opacity-60 bg-black text-white z-10  bg-base-100  ">
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
                                          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                          {navTabs}
                                    </ul>
                              </div>
                              <Link><img className=" w-[200px] " src={logo} alt="Language Learning School" /></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu  menu-horizontal px-1">{navTabs}</ul>
                        </div>
                        <div className="navbar-end">
                              <a className="btn">Button</a>
                        </div>
                  </div>
            </>
      );
};

export default Header;
