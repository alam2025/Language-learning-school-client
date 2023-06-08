import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularInstructorsCard from './PopularInstructorsCard';
import useInstructors from '../../../hooks/useInstructors';

const FeaturedInstructors = () => {
      const [instructors]= useInstructors()
      
      return (
            <div className='my-container'>
                  <SectionTitle heading={"Featured instructors"}></SectionTitle>

                  <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              instructors.slice(0,6).map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
                        }
                  </div>

            </div>
      );
};

export default FeaturedInstructors;