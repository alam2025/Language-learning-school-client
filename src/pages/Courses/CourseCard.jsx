import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useEnroll from '../../hooks/useEnroll';
import useAdmin from '../../hooks/useAdmin';


const CourseCard = ({ course }) => {
      const navigate = useNavigate()
      const { user } = useAuth()
      const [enrolls,refetch]=useEnroll()
      const [isAdded,setAdded]=useState(false)
      const [isAdmin]=useAdmin()
   


      const { name, image, instructor, available_seats, price } = course;
      

      const handleAddCart = course => {
            const { _id, name, image, instructor, available_seats, price } = course;
            if (user && user?.email) {
                  const enrollCourse = { courseId: _id,date:new Date(), name, image, instructor, price, email: user?.email };

                  fetch(`http://localhost:3000/enrollCourse`, {
                        method: 'POST',
                        headers: {
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(enrollCourse)
                  })
                        .then(res => res.json())
                        .then(data => {
                              refetch()
                              // console.log(data);
                              if(data.insertedId)
                              {
                                    alert('Successfully added')
                              }
                              
                        })
            }
            else {
                  alert('PLease Login to enroll this course.');
                  navigate('/login')
            }
      }
      return (
            <div className={`  rounded-md border shadow-md flex flex-col`}>
                  <img className=' rounded-t-md ' src={image} alt={name} />
                  <div className='px-8 pt-6 mb-3'>
                        <h3 className=' text-2xl font-bold'>{name}</h3>
                        <h4 className=' text-2xl font-semibold'><span>Instructor :</span> {instructor}</h4>
                        <p className='text-xl'>Available Seats : {available_seats}</p>
                        <p className=' text-xl text-yellow-500'>Price : ${price}</p>
                  </div>

                  <button disabled={isAdmin ===true}  onClick={() => handleAddCart(course)} className={`mt-auto bg-orange-500 btn rounded-t-none `}>Select Course</button>
            </div>
      );
};

export default CourseCard;