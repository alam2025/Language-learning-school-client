import React from 'react';
import SectionBanner from '../Shared/SectionBanner';
import useInstructors from '../../hooks/useInstructors';
import InstructorCard from './InstructorCard';


const Instructors = () => {
      const [instructors,refetch,instructorloading] = useInstructors();
      // console.log(instructors);

      return (
            <div>
                  <SectionBanner title={'Instructors'} route={'Home | Instructors'}></SectionBanner>
                  <div className=' my-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-24  gap-10'>
                        {
                              instructors.map(instructor=><InstructorCard
                              key={instructor._id}
                              instructor={instructor}
                              isLoading={instructorloading}
                              ></InstructorCard>)
                        }

                  </div>
            </div>
      );
};

export default Instructors;