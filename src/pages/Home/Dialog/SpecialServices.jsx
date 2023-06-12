import React from 'react';
import { FaDesktop, FaPeopleCarry } from "react-icons/fa";
import { BsBook, BsRadioactive } from "react-icons/bs";
import useCourses from '../../../hooks/useCourses';

const SpecialServices = () => {
      const [courses]=useCourses()
      return (
            <div className=' grid md:grid-cols-2 gap-4 lg:grid-cols-4 my-container '>
                  <div className=' flex items-center gap-3'>
                        <div className=' p-4 bg-slate-300 rounded-full'><FaDesktop size={30}></FaDesktop></div>
                        <h1 className=' text-2xl font-semibold'>Online Tutoring</h1>
                  </div>
                  <div  className=' flex items-center gap-3'>
                        <div className=' p-4 bg-green-200 rounded-full'><BsBook size={30}></BsBook></div>
                        <h1 className=' text-2xl font-semibold'>{courses.length}+ Courses</h1>
                  </div>
                  <div  className=' flex items-center gap-3'>
                       <div className=' p-4 bg-yellow-100 rounded-full'><FaPeopleCarry size={30}></FaPeopleCarry></div>
                        <h1 className=' text-2xl font-semibold'>Lifetime Accesses</h1>
                  </div>
                  <div  className=' flex items-center gap-3'>
                        <div className=' p-4 bg-blue-200 rounded-full'><BsRadioactive size={30}></BsRadioactive></div>
                        <h1 className=' text-2xl font-semibold'>Activate Learning</h1>
                  </div>
            </div>
      );
};

export default SpecialServices;