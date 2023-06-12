import React from 'react';
import SectionBanner from '../Shared/SectionBanner';
import {  useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
// import axios from 'axios';

const InstructorCourses = () => {
      const {email}= useParams();

      
      
      const {data: course=[],isLoading}=useQuery({
            queryKey:['course'],
            queryFn:async()=>{
                  const res= await fetch(`http://localhost:3000/instructor/courses?email=${email}`)
                  console.log(res);
                  return res.json()
            }
      })

      console.log(course);
      
      return (
            <div>
                  <SectionBanner title={"Instructor Courses"} route={'Home | Instructors|Courses'}></SectionBanner>
                  Instructor Courses
            </div>
      );
};

export default InstructorCourses;