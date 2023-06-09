import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useCart from '../../hooks/useCart';

const SelectedCourses = () => {
      const [selectCourse] = useCart()
      console.log(selectCourse);

      return (
            <div>
                  <SectionTitle heading={'selected courses'} subHeading={'Pay for start course'}></SectionTitle>
                  <div className=' my-container'>
                        <div className=' flex justify-between bg-orange-300 px-10 py-2'>
                              <h1 className=' text-2xl font-bold'>Total Select: {selectCourse.length}</h1>
                              <button className=' btn btn-secondary font-bold text-white'>PAY</button>
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
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                selectCourse.map((course,index) => <>
                                                      <tr key={course._id}>
                                                            <th>
                                                                 {index+1}
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
                                                                  {course.instructor}
                                                                  
                                                            </td>
                                                            <td className=' text-end'>${course.price}</td>
                                                            <th>
                                                                  <button className="btn btn-ghost btn-xs">details</button>
                                                            </th>
                                                      </tr>
                                                </>)
                                          }


                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default SelectedCourses;