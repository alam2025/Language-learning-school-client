import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SocialLogin = () => {
      const { googleSignIn } = useContext(AuthContext);
      const navigate= useNavigate()


      const handlegooglesignIn = () => {
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
                 
            }).catch(error=>console.log(error.message))
       }
       const LoadData=(user)=>{
            axios.post('http://localhost:3000/users',user)
            .then(res=>{
                  // console.log(res);
                  navigate('/')
            })
       }
      return (
            <div className=' flex gap-4'>
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