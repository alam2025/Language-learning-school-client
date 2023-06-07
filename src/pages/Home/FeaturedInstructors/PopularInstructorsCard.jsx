import React from 'react';

const PopularInstructorsCard = ({instructor}) => {
      console.log(instructor);
      return (
            <div className='border shadow-md text-center flex flex-col justify-center items-center py-3 pb-10'>
                  <img src={instructor.image} alt="" className=' rounded-full w-[250px] h-[250px]' />
                  <div className='px-8'>
                        <h3 className=' text-3xl font-semibold'>{instructor.name}</h3>
                        <h3 className=' text-xl font-bold'>Specialist : {instructor.specialist_language}</h3>
                        <p>{instructor.short_description}</p>
                  </div>
                  
            </div>
      );
};

export default PopularInstructorsCard;