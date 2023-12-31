import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useCart from '../../hooks/useCart';
import { GrTrash } from "react-icons/gr";
import useAxiosSecure from '../../hooks/useAxioseSequre';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedCourses = () => {
      const [selectCourse, refetch] = useCart()
      const [axiosSecure] = useAxiosSecure();
      // console.log(selectCourse);

      const handleDelete = course => {

            axiosSecure.delete(`/selectedCourse/${course._id}`)
                  .then(res => {
                        if (res.data.deletedCount > 0) {
                              refetch();
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

      return (
            <div>
                  <SectionTitle heading={'selected courses'} subHeading={'Pay for start course'}></SectionTitle>
                  <div className=' my-container'>
                        <div className=' flex justify-between bg-orange-300 px-10 py-2'>
                              <h1 className=' text-2xl font-bold'>Total Select: {selectCourse.length}</h1>
                             
                        </div>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr className='text-lg'>
                                                <th>
                                                      <label>
                                                            #
                                                      </label>
                                                </th>
                                                <th>Name</th>
                                                <th>Instructor</th>
                                                <th>Price</th>
                                                <th>Delete</th>
                                                <th>Payment</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                selectCourse.map((course, index) =>
                                                      <tr key={index}>
                                                            <th>
                                                                  {index + 1}
                                                            </th>
                                                            <td>
                                                                  <div className="flex items-center space-x-3">
                                                                        <div className="avatar">
                                                                              <div className="mask mask-squircle w-12 h-12">
                                                                                    <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                                                              </div>
                                                                        </div>
                                                                        <div>
                                                                              <div className="font-bold">{course.name}</div>

                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td>
                                                                  {course.instructorName}

                                                            </td>
                                                            <td className=' text-end'>${course.price}</td>
                                                            <th>
                                                                  <button onClick={() => handleDelete(course)} className="p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-400 "><GrTrash size={30} /></button>
                                                            </th>
                                                            <td>
                                                                  <Link to={`/dashboard/payment/${course._id}`}><button className=' btn btn-secondary font-bold text-white'>PAY</button></Link>
                                                            </td>
                                                      </tr>
                                                )
                                          }


                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default SelectedCourses;