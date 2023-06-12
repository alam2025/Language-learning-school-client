import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import SectionTitle from '../../../../pages/Shared/SectionTitle';

const UserHome = () => {
      const {user}= useAuth()
      return (
            <div>
                  <SectionTitle heading={`welcome to ${user.displayName}`}></SectionTitle>
            </div>
      );
};

export default UserHome;