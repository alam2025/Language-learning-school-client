import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';

const Registration = () => {
      const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
            console.log(data);
      };
      return (
            <div >
                  <SectionBanner title={'Login'} route={'Home | Login'}></SectionBanner>
                  <SectionTitle heading={'Application Form'} subHeading={'Become a Member'}></SectionTitle>

                  <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Register
                              </button>
                        </form>
                  </div>



            </div>
      );
};

export default Registration;