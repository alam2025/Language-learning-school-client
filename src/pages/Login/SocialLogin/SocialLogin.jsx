import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
      const { googleSignIn } = useContext(AuthContext);
      const navigate= useNavigate()


      const handlegooglesignIn = () => {
            googleSignIn()
            .then(result=>{
                  console.log(result.user);
                  navigate('/')
            }).catch(error=>console.log(error.message))
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