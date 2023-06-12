import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';

const InstructorCard = ({instructor,isLoading}) => {
      if(isLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      // console.log(instructor);
      const {name,photo,email,number_of_courses_taken,courses_taken}= instructor
      return (
            <div className=' rounded-md border shadow-md flex flex-col'>
                  <img src={photo} alt="" className=' rounded-t-md' />
                  <div className=' px-10 pt-6 mb-3'>
                        <h1 className=' text-3xl font-bold'>{name}</h1>
                        <p className=' '><span className=' font-semibold'>Email </span> : {email}</p>
                        <p><span className=' font-semibold'>Number of Courses:</span> {number_of_courses_taken}</p>
                        <h1><span className=' font-semibold'>Name of Course :</span></h1>
                        {/* <ul className=' ml-4'>
                              {
                                    courses_taken.map((c,index)=><li key={index}>{index+1} : {c}</li>)
                              }
                        </ul> */}
                  </div>

                 
                        <Link  to={`/instructorCourses/${email}`}><button className='mt-auto bg-orange-500 btn rounded-t-none'>See Courses</button></Link>
                  
            </div>
      );
};

export default InstructorCard;