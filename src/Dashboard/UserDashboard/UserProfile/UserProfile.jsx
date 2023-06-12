import React from 'react';
import SectionBanner from '../../../pages/Shared/SectionBanner';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import useAuth from '../../../hooks/useAuth';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import ProfileForm from './ProfileForm';

const UserProfile = () => {
      const {user,loading}=useAuth()
      const [axiosSecure]=useAxiosSecure()
      const {data: mySelf=[]}=useQuery({
            queryKey:['users',user?.email],
            enabled:!loading,
            queryFn:async()=>{
                  const res=await axiosSecure.get(`/oneUsers?email=${user?.email}`)
                  return res.data
            }
      })
      // console.log(mySelf);
      return (
            
            <div>
                  <SectionBanner title={`Wlecome ${mySelf?.role || mySelf?.name}`} route={'Home | Profile'}></SectionBanner>

                  <SectionTitle heading={'Update your profile'}></SectionTitle>

                  
                  <ProfileForm user={mySelf}></ProfileForm>
                  
            </div>
      );
};

export default UserProfile;