import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
// import SectionBanner from '../../pages/Shared/SectionBanner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MyClasses from './MyClasses/MyClasses';
import useEnroll from '../../hooks/useEnroll';


const InstructorHome = () => {
      
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


// console.log(myClasses);
      const approved= myClasses.filter(mc=>mc.status ==='Active');
      const pending= myClasses.filter(mc=>mc.status ==='Pending');

      const totalEnroll = myClasses?.reduce((sum, course) => sum + (course?.enroll_student || 0), 0);
      
      


     
      return (
            <div className=' mt-16'>

                  <SectionTitle heading={`Welcome to ${user?.displayName}`}></SectionTitle>

                  <div className="stats shadow flex justify-center items-center md:mx-10">

                        <div className="stat place-items-center">
                              <div className="stat-title">Total Approved Classes</div>
                              <div className="stat-value">{approved?.length}</div>
                             
                        </div>

                        <div className="stat place-items-center">
                              <div className="stat-title">Pending Classes</div>
                              <div className="stat-value text-secondary">{pending?.length}</div>
                              
                        </div>

                        <div className="stat place-items-center">
                              <div className="stat-title">Total Enrolled</div>
                              <div className="stat-value">{totalEnroll || 0}</div>
                              
                        </div>

                  </div>
            </div>
      );
};

export default InstructorHome;