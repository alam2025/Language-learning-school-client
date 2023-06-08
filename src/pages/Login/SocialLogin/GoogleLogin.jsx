import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const GoogleLogin = () => {
      const { googleSignIn } = useContext(AuthContext);
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

export default GoogleLogin;