import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useEnroll from '../../hooks/useEnroll';
import { GrTrash} from "react-icons/gr";

const EnrollCourse = () => {
      const [enrolls] = useEnroll()
      
      const handleDelete=enroll=>{
            console.log(enroll._id);
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
                                                                  <button onClick={()=>handleDelete(enroll)} className=' bg-red-200 p-2 rounded-md hover:bg-red-400' ><GrTrash size={30}></GrTrash></button>
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