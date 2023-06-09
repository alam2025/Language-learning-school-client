import React from 'react';
import { TfiAlignJustify } from "react-icons/tfi";
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/black-logo.png'
import { FaBookOpen, FaHome, FaUserShield, FaUsers } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
      const { logOut } = useAuth()
      const navigate = useNavigate()
      const [isAdmin] = useAdmin()



      return (
            <div className="drawer lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content mt-16">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="  bg-transparent  drawer-button  lg:hidden ml-4 cursor-pointer "><TfiAlignJustify size={50} /></label>
                        <Outlet></Outlet>


                  </div>
                  <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase ">
                              <div>
                                    <img src={logo} alt="" className=' mb-10' />
                              </div>
                              <div className="divider"></div>
                              {/* Sidebar content here */}

                              <div className="divider"></div>
                              {
                                    isAdmin && <>
                                          <li><NavLink to='/dashboard/adminhome'><FaHome />ADMIN HOME</NavLink></li>
                                          <li><NavLink to='/dashboard/courses'><FaBookOpen />Manage Courses</NavLink></li>
                                          <li><NavLink to='/dashboard/users'><FaUsers />Manage Users</NavLink></li>
                                    </>
                              }

                              <div className="divider"></div>

                              <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                              <li><NavLink to='/instructors'><FaUsers />Instructors</NavLink></li>
                              <li><NavLink to='/courses'><FaUsers />Courses</NavLink></li>
                              <li onClick={() => logOut().then(() => navigate('/'))}><h1 ><FaUsers />Logout</h1></li>



                        </ul>

                  </div>
            </div>
      );
};

export default Dashboard;