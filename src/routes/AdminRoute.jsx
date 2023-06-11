import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
      const {user,loading}=useAuth();
      const [isAdmin,isAdminLoading]=useAdmin();
      const location = useLocation()

      if(loading && isAdminLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if(user && isAdmin){
            return children;
      }

      return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;