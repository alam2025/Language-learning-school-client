import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      const {user,loading}=useAuth();
      const location=useLocation()
      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if(user)
      {
            return children
      }
      return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;