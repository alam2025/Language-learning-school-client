import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxioseSequre';
import { useQuery } from '@tanstack/react-query';
import useCourses from '../../hooks/useCourses';

const AdminHome = () => {
      const { user } = useAuth();
      const [courses]=useCourses()

      const [axiosSecure] = useAxiosSecure();
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get(`https://language-learning-school-server.vercel.app/users`);
                  return res.data;
            }
      })

      const instructor= users.filter(u=>u.role === 'instructor')
      const student= users.filter(u=>(u?.role !=='admin' && u?.role !=='instructor' ))
      return (
            <div className=' mt-16'>
                  <SectionTitle heading={`Welcome to ${user?.displayName}`}></SectionTitle>

                  <div className="stats shadow flex justify-center items-center md:mx-10">

                        <div className="stat place-items-center">
                              <div className="stat-title">Instructors</div>
                              <div className="stat-value">{instructor?.length}</div>
                              
                        </div>

                        <div className="stat place-items-center">
                              <div className="stat-title">Students</div>
                              <div className="stat-value text-secondary">{student?.length}</div>
                              
                        </div>

                        <div className="stat place-items-center">
                              <div className="stat-title">Total Classes</div>
                              <div className="stat-value">{courses?.length}</div>
                              
                        </div>

                  </div>
            </div>
      );
};

export default AdminHome;