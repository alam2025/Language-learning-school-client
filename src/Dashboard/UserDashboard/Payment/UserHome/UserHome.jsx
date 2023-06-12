import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import SectionTitle from '../../../../pages/Shared/SectionTitle';
import UserStats from './UserStats';

const UserHome = () => {
      const {user}= useAuth()
      return (
            <div>
                  <SectionTitle heading={`welcome to ${user.displayName}`}></SectionTitle>

                  <UserStats></UserStats>
            </div>
      );
};

export default UserHome;