import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import axios from 'axios';

const Registration = () => {
      const { createUser,
            setProfile,
            user,
            logOut
      } = useContext(AuthContext);

      const { register,
            handleSubmit,
            formState: { errors } } = useForm();
      const navigate = useNavigate();

      const [error, setError] = useState('');

      const image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBGG_KEY}`

      const onSubmit = async (data) => {
            setError('')
            const formData = new FormData();
            formData.append('image', data.photo[0]);

            const response = await axios.post(`${image_url}`, formData);
            
            if (response.data && response.data.data && response.data.data.url) {
                  if (response.data.success) {
                        const imgUrl = response.data.data.display_url;
                        const { name, email } = data;
                        const newUser = { name, email, photo: imgUrl }
                        createUser(data.email, data.password)
                              .then(result => {
                                    axios.post('https://language-learning-school-server.vercel.app/users', newUser)
                                          .then(res => {
                                               
                                                setProfile(data.name, response.data.data.display_url)
                                                      .then(() => {
                                                            alert('User Created. Please Login.')
                                                            logOut()
                                                            navigate('/login')
                                                      }).catch((error) => { setError(error.message) })
                                          })


                                    // console.log(result.user);
                              }).catch(error => setError(error.message))

                  }
            }
            
      };

      return (
            <div >
                  <Helmet>
                        <title>Language Learning School | Registration</title>
                  </Helmet>
                  <SectionBanner title={'Registration'} route={'Home | Registration'}></SectionBanner>
                  <SectionTitle heading={'Application Form'} subHeading={'Become a Member'}></SectionTitle>

                  <div className="container mx-auto px-4 my-container bg-slate-100 md:p-20 p-6 rounded-lg mb-20">
                        {
                              error && <p className=' text-red-600'>{error}</p>
                        }

                        < form onSubmit={handleSubmit(onSubmit)}>
                              <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                                    <div className="mb-4">
                                          <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                                                Name *
                                          </label>
                                          <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('name', { required: 'Name is Required' })}
                                          />
                                          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                                                Email*
                                          </label>
                                          <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('email', { required: "Email is Required" })}
                                          />
                                          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                    </div>

                                    <div className="mb-4">
                                          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                                                Choose a File
                                          </label>
                                          <input
                                                type="file"
                                                id="photo"
                                                {...register('photo', { required: 'photo is required' })}
                                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.photo ? 'border-red-500' : ''}`}
                                                placeholder="Select File"
                                          />
                                          {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <span className="block text-gray-700 font-bold mb-1">Gender*</span>
                                          <div className="flex">
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="male" {...register('gender', { required: true })} />
                                                      <span className="ml-1">Male</span>
                                                </label>
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="female" {...register('gender', { required: true })} />
                                                      <span className="ml-1">Female</span>
                                                </label>
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="other" {...register('gender', { required: true })} />
                                                      <span className="ml-1">Other</span>
                                                </label>
                                                {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                                          </div>
                                    </div>

                                    <div className="mb-4">
                                          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-1">
                                                Phone Number*
                                          </label>
                                          <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('phoneNumber', { required: 'Phone number is Required' })}
                                          />
                                          {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="address" className="block text-gray-700 font-bold mb-1">
                                                Address
                                          </label>
                                          <textarea
                                                id="address"
                                                name="address"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('address')}
                                          ></textarea>
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
                                                Password*
                                          </label>
                                          <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('password', { required: "Password is Required" })}
                                          />
                                          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-1">
                                                Confirm Password*
                                          </label>
                                          <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('confirmPassword', { required: "Confirm Password is Required" })}
                                          />
                                          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                                    </div>

                              </div>
                              <div className=' text-center'>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-3 w-full mt-6  rounded-md">
                                          Register
                                    </button>
                              </div>
                        </form>
                        <div className=' flex flex-col gap-4 mt-4 justify-center items-center'>
                              <Link to='/Login' className=' text-green-700'>Already Have An Account. Login Here</Link>
                              <p>Or , Sign in WIth</p>
                              {/* <SocialSignIn/> */}
                              <SocialLogin></SocialLogin>
                        </div>
                  </div>



            </div>
      );
};

export default Registration;