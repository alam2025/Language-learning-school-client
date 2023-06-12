import React from 'react';
import useCart from '../../../../hooks/useCart';
import useEnroll from '../../../../hooks/useEnroll';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxioseSequre';
import { useQuery } from '@tanstack/react-query';

const UserStats = () => {
      const [selectCourse]= useCart()
      const [enrolls]=useEnroll()
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
      return (
            <div className="stats shadow">

                  <div className="stat place-items-center">
                        <div className="stat-title">Selected Courses</div>
                        <div className="stat-value">{selectCourse?.length}</div>
                        
                  </div>

                  <div className="stat place-items-center">
                        <div className="stat-title">Enroll Courses</div>
                        <div className="stat-value text-secondary">{enrolls?.length}</div>
                        
                  </div>

                  <div className="stat place-items-center">
                        <div className="stat-title">Total payment</div>
                        <div className="stat-value">{payments?.length}</div>
                        
                  </div>

            </div>
      );
};

export default UserStats;