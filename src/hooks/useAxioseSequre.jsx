import {  useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
      baseURL: 'https://language-learning-school-server.vercel.app',
});
const useAxiosSecure = () => {
      const { logOut } = useAuth()
      const navigate = useNavigate();



      useEffect(() => {
            axiosSecure.interceptors.request.use((config) => {
                  const token = localStorage.getItem('access_token');
                  // console.log(object);
                  if (token) {
                        // console.log(object);
                        config.headers.Authorization = `Bearer ${token}`; // Update to use 'Bearer' keyword
                  }
                  return config;
            });

            axiosSecure.interceptors.response.use(
                  (response) => response,
                  async (error) => {
                        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                              await logOut()

                              navigate('/login');
                        }
                        return Promise.reject(error);
                  }
            );
      }, [logOut, navigate]);

      return [axiosSecure];
};

export default useAxiosSecure;
