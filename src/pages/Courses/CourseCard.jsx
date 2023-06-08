import React from 'react';

const CourseCard = ({course}) => {
      const {name,image,instructor,available_seats,price}=course;
      //  console.log(course);
      return (
            <div className='  rounded-md border shadow-md flex flex-col'>
                  <img className=' rounded-t-md ' src={image} alt={name} />
                  <div className='px-10 pt-6 mb-3'>
                        <h3 className=' text-3xl font-bold'>{name}</h3>
                        <h4 className=' text-2xl font-semibold'><span>Instructor :</span> {instructor}</h4>
                        <p className='text-xl'>Available Seats : {available_seats}</p>
                        <p className=' text-xl text-yellow-500'>Price : ${price}</p>
                  </div>

                  <button className='mt-auto bg-orange-500 btn rounded-t-none'>Select Course</button>
            </div>
      );
};

export default CourseCard;