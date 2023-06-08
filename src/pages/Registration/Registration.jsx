import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {
      const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
            console.log(data);
      };

      const handlegooglesignIn=()=>{}
      return (
            <div >
                  <SectionBanner title={'Registration'} route={'Home | Registration'}></SectionBanner>
                  <SectionTitle heading={'Application Form'} subHeading={'Become a Member'}></SectionTitle>

                  <div className="container mx-auto px-4 my-container bg-slate-100 md:p-20 p-6 rounded-lg mb-20">

                        < form onSubmit={handleSubmit(onSubmit)}>
                              <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                                    <div className="mb-4">
                                          <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                                                Name
                                          </label>
                                          <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('name', { required: true })}
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                                                Email
                                          </label>
                                          <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('email', { required: true })}
                                          />
                                    </div>

                                    <div className="mb-4">
                                          <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-1">
                                                Photo URL
                                          </label>
                                          <input
                                                type="text"
                                                id="photoUrl"
                                                name="photoUrl"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('photoUrl')}
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <span className="block text-gray-700 font-bold mb-1">Gender</span>
                                          <div className="flex">
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="male" {...register('gender')} />
                                                      <span className="ml-1">Male</span>
                                                </label>
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="female" {...register('gender')} />
                                                      <span className="ml-1">Female</span>
                                                </label>
                                                <label className="mr-4">
                                                      <input type="radio" name="gender" value="other" {...register('gender')} />
                                                      <span className="ml-1">Other</span>
                                                </label>
                                          </div>
                                    </div>

                                    <div className="mb-4">
                                          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-1">
                                                Phone Number
                                          </label>
                                          <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('phoneNumber')}
                                          />
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
                                                Password
                                          </label>
                                          <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('password', { required: true })}
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-1">
                                                Confirm Password
                                          </label>
                                          <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('confirmPassword', { required: true })}
                                          />
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
      );
};

export default Registration;