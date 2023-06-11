import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import { GrStatusInfo, GrTrash } from "react-icons/gr";
import Swal from 'sweetalert2';
import moment from 'moment';
const PaymentHistory = () => {
      const { user } = useAuth();
      const [axiosSecure] = useAxiosSecure();
      const { data: payments = [], refetch } = useQuery({
            queryKey: ['payment', user?.email],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/paymentshistory?email=${user?.email}`)
                  // console.log(res);
                  return res.data
            }
      })

      // console.log(payments);
      const handleDelete = payment => {
            // console.log(payment._id);

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
                        axiosSecure.delete(`/paymentHistoryDelete/${payment._id}?email=${user?.email}`)
                              .then(res => {
                                    // if(res.data.deletedCount)
                                    if (res.data.deletedCount) {
                                          refetch()
                                          Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Your payment history has been saved',
                                                showConfirmButton: false,
                                                timer: 1500
                                          })
                                    }
                              })
                  }
            })
      }


      return (
            <div>
                  <SectionTitle heading={'Payment History'}></SectionTitle>

                  <div className=' mx-5'>
                        <h1 className=' text-3xl font-bold'>Total Payment : {payments.length}</h1>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr className='text-lg'>
                                                <th>
                                                     #
                                                </th>
                                                <th>
                                                      <label>
                                                            Transaction ID
                                                      </label>
                                                </th>
                                                <th>Transaction Time</th>
                                                <th>price</th>

                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                payments.map((payment, index) =>
                                                      <tr key={index}>
                                                            <th>
                                                                  {index+1}
                                                            </th>
                                                            <th>
                                                                  {payment.transactionId}
                                                            </th>
                                                            <td>
                                                                  <div className="flex items-center space-x-3">

                                                                        <div>
                                                                              <div className="font-bold">{moment(payment.date).fromNow()}</div>

                                                                        </div>
                                                                  </div>
                                                            </td>

                                                            <td className=' text-end'>${payment.price}</td>
                                                            <th>
                                                                  <button onClick={() => handleDelete(payment)} className="p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-400 ">DELETE</button>
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

export default PaymentHistory;