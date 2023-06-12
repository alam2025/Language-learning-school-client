import React, { useState } from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import { useQuery } from '@tanstack/react-query';
import { BsPencil } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';

const MyClasses = () => {
      const { user, loading } = useAuth();
      const [axiosSecure] = useAxiosSecure();
      const [info,setInfo]= useState('');

      const { data: myClasses = [], refetch } = useQuery({
            queryKey: ['myClasses', user?.email],
            enabled: !loading && !!user?.email && !!localStorage.getItem('access_token'),
            queryFn: async () => {
                  const res = await axiosSecure(`/instructorClasses?email=${user?.email}`);
                  return res.data
            }
      })

      // console.log(info);

      return (
            <div>
                  <SectionTitle heading={'my classes'}></SectionTitle>

                  <div className=' mb-24'>
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
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Total Enrolled</th>
                                                <th>Update</th>
                                                <th>Feedback</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {
                                                myClasses.map((myClass, index) => <tr key={index}>
                                                      <th>
                                                            <label>
                                                                  {index + 1}
                                                            </label>
                                                      </th>
                                                      <td>
                                                            <div className="flex items-center space-x-3">

                                                                  <div>
                                                                        <div className="font-bold">{myClass.name}</div>
                                                                        <div className="text-sm opacity-50">{myClass.category}</div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td>
                                                            ${myClass?.price}
                                                      </td>
                                                      <td className={`${myClass?.status ==='Pending'&&'text-yellow-700 text-lg'}`}>{(myClass?.status==='Active'&&'Approved') || myClass?.status}</td>

                                                      <td>{myClass?.enroll_student || 0}</td>

                                                      <td><Link to={`/dashboard/updateClass/${myClass._id}`}>
                                                            <button><BsPencil size={25} /></button>
                                                      </Link></td>
                                                      <th >
                                                            <button disabled={!myClass.feedback} onClick={() => {
                                                                  window.my_modal_1.showModal(),
                                                                  setInfo(myClass)
                                                            }} className="btn btn-ghost btn-xs"><BiShow size={25} /></button>




                                                      </th>

                                                </tr>)
                                          }


                                    </tbody>

                              </table>
                        </div>
                  </div>

                  <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box">
                              <div className=' text-center'>
                                    <h3 className=' text-2xl font-bold underline'>Admin Feedback</h3>
                                    <h1>{info?.feedback || 'Your Course in good Condition'}</h1>
                              </div>
                              <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                              </div>
                        </form>
                  </dialog>
            </div>
      );
};

export default MyClasses;