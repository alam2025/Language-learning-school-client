import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import { useQuery } from '@tanstack/react-query';
import { BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';

const MyClasses = () => {
      const { user, loading } = useAuth();
      const [axiosSecure] = useAxiosSecure();

      const { data: myClasses = [], refetch } = useQuery({
            queryKey: ['myClasses', user?.email],
            enabled: !loading && !!user?.email && !!localStorage.getItem('access_token'),
            queryFn: async () => {
                  const res = await axiosSecure(`/instructorClasses?email=${user?.email}`);
                  return res.data
            }
      })

      return (
            <div>
                  <SectionTitle heading={'my classes'}></SectionTitle>

                  <div>
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
                                                            ${myClass.price}
                                                      </td>
                                                      <td>{myClass?.status}</td>
                                                      <td>{myClass.enroll || 0}</td>
                                                      <td><Link to={`/dashboard/updateClass/${myClass._id}`}>
                                                            <button><BsPencil size={25}/></button>
                                                      </Link></td>
                                                      <th>
                                                            <button className="btn btn-ghost btn-xs">details</button>
                                                      </th>
                                                </tr>)
                                          }


                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default MyClasses;