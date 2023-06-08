import React from 'react';

const CourseCard = ({course}) => {
      const {name,image,instructor,available_seats,price}=course;
       console.log(course);
      return (
            <div className=' flex flex-col '>
                  <img src={image} alt={name} />
                  <div>
                        <h3>{name}</h3>
                        <h4>Instructor : {instructor}</h4>
                        <p>Available Seats : {available_seats}</p>
                        <p>Price : ${price}</p>
                  </div>

                  <button className='mt-auto bg-orange-500 btn rounded-t-none'>Select Course</button>
            </div>
      );
};

export default CourseCard;