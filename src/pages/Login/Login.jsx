import React from 'react';
import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import animationData from '../../../public/signIN.json'
import Lottie from 'react-lottie';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
      const { register,
            handleSubmit,
            formState: { errors } } = useForm();

      const onSubmit = (data) => {
            console.log(data);
      };

      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
            }
      };

      const handlegooglesignIn = () => { }

      return (
            <div className=' mb-24'>
                  <SectionBanner title={'Login'} route={'Home | Login'}></SectionBanner>
                  <SectionTitle heading={'Login Form'} subHeading={''}></SectionTitle>

                  <div className="container mx-auto px-4 border shadow-md py-12 px-10 bg-slate-100 ">
                        {/* <h1 className="text-2xl font-bold mb-4">Login</h1> */}
                        <div className=' flex flex-col md:flex-row gap-12 justify-center items-center'>
                              <div className='w-full'>
                                    <Lottie options={defaultOptions}
                                          height={400}
                                          width={400}
                                    />
                              </div>
                              <div className='w-full'>
                                    <form className=' flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                                          <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                                                      Email
                                                </label>
                                                <input
                                                      type="email"
                                                      id="email"
                                                      name="email"
                                                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                      {...register('email', { required: 'Email is Required' })}
                                                />
                                                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                          </div>
                                          <div className="mb-4">
                                                <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
                                                      Password
                                                </label>
                                                <input
                                                      type="password"
                                                      id="password"
                                                      name="password"
                                                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                      {...register('password', { required: 'Password is Required' })}
                                                />
                                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                                          </div>
                                          <input type="submit" value="Login" className="bg-blue-500 text-white px-4 py-2 rounded-md" />
                                          {/* <button type="submit" >
                                          Login
                                    </button> */}
                                    </form>
                                    <div className=' flex flex-col gap-4 mt-4 justify-center items-center'>
                                          <Link to='/register' className=' text-orange-700'>New here? Create a New Account.</Link>
                                          <p>Or , Sign in WIth</p>
                                          {/* <SocialSignIn/> */}
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
                                    </div>
                              </div>
                        </div>
                  </div>



            </div>
      );
};

export default Login;