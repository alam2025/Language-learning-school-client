import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import { GrStatusInfo, GrTrash} from "react-icons/gr";
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
      const handleDelete=payment=>{
            console.log(payment._id);
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
                                                      <label>
                                                            Transaction ID
                                                      </label>
                                                </th>
                                                <th>Coustomer Name</th>
                                                <th>price</th>
                                                
                                                <th>Status</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                payments.map((payment, index) =>
                                                      <tr key={index}>
                                                            <th>
                                                                  {payment.transactionId}
                                                            </th>
                                                            <td>
                                                                  <div className="flex items-center space-x-3">
                                                                        
                                                                        <div>
                                                                              <div className="font-bold">{payment.name}</div>

                                                                        </div>
                                                                  </div>
                                                            </td>
                                                           
                                                            <td className=' text-end'>${payment.price}</td>
                                                            <th>
                                                                  <button onClick={() => handleDelete(payment)} className="p-2 rounded-md bg-red-300 cursor-pointer hover:bg-red-400 ">{payment.status}</button>
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