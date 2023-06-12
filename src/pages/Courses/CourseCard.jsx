import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useEnroll from '../../hooks/useEnroll';
import useAdmin from '../../hooks/useAdmin';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import isInstructor from '../../hooks/isInstructor';


const CourseCard = ({ course }) => {
      const [itInstructor]=isInstructor()
      const navigate = useNavigate()
      const { user } = useAuth()
      const [enrolls] = useEnroll()
      const [isAdded, setAdded] = useState(false)
      const [isAdmin] = useAdmin()
      const [axiosSecure] = useAxiosSecure()
      const [,refetch]=useCart();
      



      const { name, image, instructorName, available_seats, price } = course;
      console.log(course);


      const handleAddCart = course => {
            const { _id, name, image, instructor, available_seats, price } = course;
            if (user && user?.email) {
                  const selectedCourse = { courseId: _id, date: new Date(), name, image, instructor, price, email: user?.email, available_seats };
                  axiosSecure.post('/selectCourse', selectedCourse)
                        .then(res => {
                              
                              if (res.data.insertedId) {
                                    refetch()
                                    // alert('opk')
                                   
                                    Swal.fire({
                                    
                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'Your work has been saved',
                                          showConfirmButton: false,
                                          timer: 1500
                                        })
                                        
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
                        <h4 className=' text-2xl font-semibold'><span>Instructor :</span> {instructorName}</h4>
                        <p className='text-xl'>Available Seats : {available_seats}</p>
                        <p className=' text-xl text-yellow-500'>Price : ${price}</p>
                  </div>

                  <button disabled={isAdmin === true || itInstructor===true} onClick={() => handleAddCart(course)} className={`mt-auto bg-orange-500 btn rounded-t-none `}>Select Course</button>
            </div>
      );
};

export default CourseCard;