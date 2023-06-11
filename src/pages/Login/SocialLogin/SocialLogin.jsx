import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SocialLogin = () => {
      const { googleSignIn } = useContext(AuthContext);
      const navigate= useNavigate();
      const location = useLocation();
      const [error,setError]=useState('')

      const from= location.state?.from?.pathname || '/';


      const handlegooglesignIn = () => {
            setError('');
            googleSignIn()
            .then(result=>{
                  const user = result.user;
                  const createUser={
                        name:user.displayName,
                        photo:user.photoURL,
                        email:user.email
                  }
                  // console.log(result.user);
                  LoadData(createUser);
                 
            }).catch(error=>setError(error.message))
       }
       const LoadData=(user)=>{
            axios.post('https://language-learning-school-server.vercel.app/users',user)
            .then(res=>{
                  // console.log(res);
                  navigate(from,{replace:true})
            })
       }
      return (
            <div className=' flex gap-4'>
                  {
                        error&&<p>{error}</p>
                  }
                  <button className="btn btn-circle btn-outline">
                        <FaFacebook size={40} />
                  </button>
                  <button onClick={handlegooglesignIn} className="btn btn-circle btn-outline">
                        <FaGoogle size={40} />
                  </button>
                  <button className="btn btn-circle btn-outline">
                        <FaGithub size={40} />
                  </button>
            </div>
      );
};

export default SocialLogin;