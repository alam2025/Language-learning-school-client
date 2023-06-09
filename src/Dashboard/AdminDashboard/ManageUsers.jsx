import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import { useQuery } from '@tanstack/react-query';
import { GrTrash, GrUserAdmin } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
const ManageUsers = () => {
      const [axiosSecure] = useAxiosSecure();
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get(`http://localhost:3000/users`);
                  return res.data;
            }
      })
      // console.log(users);

      //admin set
      const handleAdmin = user => {
            axiosSecure.patch(`/users/admin/${user._id}`)
                  .then(data => {

                        if (data.data.modifiedCount > 0) {
                              refetch()
                              alert('OK')


                        }
                  })
      }

      // instructor set 
      const handleInstructor = user => {
            axiosSecure.patch(`/users/instructor/${user._id}`)
                  .then(data => {
                        if (data.data.modifiedCount > 0) {
                              refetch();
                              alert('Now instructor')
                        }
                  })
      }
      return (
            <div>
                  <SectionTitle heading={'Manage Users'} subHeading={'What to do'}></SectionTitle>
                  {/* table for users  */}
                  <div className=" overflow-x-auto mb-20 mx-10">
                        <table className="table">

                              <thead>
                                    <tr className=' text-xl'>
                                          <th>
                                                <label>
                                                      #
                                                </label>
                                          </th>
                                          <th>Image</th>
                                          <th>Name</th>
                                          <th>Make Instructor</th>
                                          <th>Make Admin</th>
                                          <th>Delete</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          users.map((user, index) =>
                                                <tr key={user?._id}>
                                                      <th>
                                                            <label>
                                                                  {index + 1}
                                                            </label>
                                                      </th>
                                                      <td>
                                                            <div className="flex items-center space-x-3">
                                                                  <div className="avatar">
                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                              <img src={user.photo} alt={user.name} />
                                                                        </div>
                                                                  </div>

                                                            </div>
                                                      </td>

                                                      <td>
                                                            <h1 className=' font-bold'>{user.name}</h1>
                                                      </td>

                                                      <td >
                                                            <div className='flex items-center justify-center'>
                                                                  {
                                                                        user?.role === 'instructor' ? 'Instructor' :
                                                                              <button
                                                                                    onClick={() => handleInstructor(user)}
                                                                                    className={` p-2 rounded-md text-white bg-green-400
                                                                        ${user?.role === 'admin' && ' bg-red-600'} `}
                                                                                    disabled={user?.role === 'admin'}><GiTeacher size={30}></GiTeacher></button>
                                                                  }
                                                            </div>


                                                      </td>

                                                      <td >
                                                            <div className='flex items-center justify-center '>

                                                                  {
                                                                        user?.role === 'admin' ? 'Admin' : <>
                                                                              <button onClick={() => handleAdmin(user)}
                                                                                    className={`${user?.role === 'instructor' && ' bg-red-400'} p-2 rounded-md `}
                                                                                    disabled={user?.role === 'instructor'}><GrUserAdmin size={30}></GrUserAdmin></button>
                                                                        </>
                                                                  }
                                                            </div>
                                                      </td>

                                                      <th>
                                                            <div >
                                                                  <button className=' bg-red-200 p-2 rounded-md hover:bg-red-400' ><GrTrash size={30}></GrTrash></button>
                                                            </div>
                                                      </th>
                                                </tr>
                                          )
                                    }

                              </tbody>



                        </table>
                  </div>
            </div>
      );
};

export default ManageUsers;