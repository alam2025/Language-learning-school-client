import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularClassCard from '../PopularClasses/PopularClassCard';
import PopularInstructorsCard from './PopularInstructorsCard';

const FeaturedInstructors = () => {
      const [instructors, setInstructors] = useState([])
      useEffect(() => {
            fetch('./instructors.json').then(res => res.json()).then(data => {
                  const popularInstructor = data.slice(0, 6);
                  setInstructors(popularInstructor)
            })
      }, [])
      return (
            <div className='my-container'>
                  <SectionTitle heading={"Featured instructors"}></SectionTitle>

                  <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              instructors.map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)
                        }
                  </div>

            </div>
      );
};

export default FeaturedInstructors;