import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularClassCard from './PopularClassCard';
import useCourses from '../../../hooks/useCourses';
import CourseCard from '../../Courses/CourseCard';

const PopularClasses = () => {
      const [courses]= useCourses()
     
      const popular= courses.slice(0,6)

      return (
            <div className='my-container my-20'>
                  <SectionTitle heading={'Popular courses'} subHeading={'Only the Best'}></SectionTitle>

                 <div className=' justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8'>
                  {

                        popular.map(item=><CourseCard key={item._id} course={item}></CourseCard>)
                  }
                 </div>
            </div>
      );
};

export default PopularClasses;