import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useEnroll from '../../hooks/useEnroll';
import { GrTrash } from "react-icons/gr";
import useAxiosSecure from '../../hooks/useAxioseSequre';
import Swal from 'sweetalert2';

const EnrollCourse = () => {
      const [enrolls, refetch] = useEnroll()
      const [axiosSecure] = useAxiosSecure();

      const handleDelete = enroll => {
            console.log(enroll);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/enrollCourses/${enroll._id}`)
                              .then(res => {
                                    console.log(res.data);
                                    refetch()
                                    if (res.data.deletedCount > 0) {
                                            Swal.fire(
                                              'Deleted!',
                                              'Your file has been deleted.',
                                              'success'
                                            )
                                    }
                              })

                  }
            })

      }
      return (
            <div>
                  <SectionTitle heading={'Enrolled Courses'} ></SectionTitle>
                  <p>{enrolls.length}</p>

                  <div className='mx-3'>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th>
                                                      <label>
                                                            #
                                                      </label>
                                                </th>
                                                <th>Name</th>
                                                <th>Instructor</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {
                                                enrolls?.map((enroll, index) =>
                                                      <tr key={index}>
                                                            <th>
                                                                  <label>
                                                                        {index + 1}
                                                                  </label>
                                                            </th>
                                                            <td>
                                                                  <div className="flex items-center space-x-3">
                                                                        <div className="avatar">
                                                                              <div className="mask mask-squircle w-12 h-12">
                                                                                    <img src={enroll.image} alt="Avatar Tailwind CSS Component" />
                                                                              </div>
                                                                        </div>
                                                                        <div>
                                                                              <div className="font-bold">{enroll.name}</div>

                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td>
                                                                  {enroll.instructor}
                                                            </td>
                                                            <td>${enroll.price}</td>
                                                            <th>
                                                                  <div >
                                                                        <button onClick={() => handleDelete(enroll)} className=' bg-red-200 p-2 rounded-md hover:bg-red-400' ><GrTrash size={30}></GrTrash></button>
                                                                  </div>
                                                            </th>
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

export default EnrollCourse;