import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const AddClass = () => {
      const {user}=useAuth()
      const { register,
            handleSubmit,
            formState: { errors } } = useForm();

      const onSubmit = async (data) => {
            console.log(data);
      }

      const { data: categories = [], refetch } = useQuery({
            queryKey: ['category'],
            queryFn: async () => {
                  const res = await fetch('/category.json');
                  return res.json()
            }
      })

      return (
            <div>
                  <Helmet>
                        <title>Language Learning School | Add Class</title>
                  </Helmet>
                  <SectionTitle heading={'Add a Course'}></SectionTitle>


                  {/* input field  */}
                  <div className="container mx-auto px-4 my-container bg-slate-100 md:p-20 p-6 rounded-lg mb-20">
                        {/* {
                              error && <p className=' text-red-600'>{error}</p>
                        } */}

                        < form onSubmit={handleSubmit(onSubmit)}>
                              <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                                    <div className="mb-4">
                                          <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                                                Class Name *
                                          </label>
                                          <input
                                                type="text"
                                                id="name"
                                                placeholder='Class Name'
                                                name="name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('name', { required: 'Name is Required' })}
                                          />
                                          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-1">
                                                Instructor Name *
                                          </label>
                                          <input
                                                type="text"
                                                readOnly
                                                defaultValue={user?.displayName}
                                                id="instructorName"
                                                name="instructorName"
                                                placeholder='Instructor Name'
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('instructorName')}
                                          />
                                          {errors.instructorName && <span className="text-red-500 text-sm">{errors.instructorName.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                                                Instructor Email*
                                          </label>
                                          <input
                                                type="email"
                                                id="email"
                                                readOnly
                                                defaultValue={user?.email}
                                                name="email"
                                                placeholder='Instructor Email'
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('email')}
                                          />
                                          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="seats" className="block text-gray-700 font-bold mb-1">
                                                Available Seats*
                                          </label>
                                          <input
                                                type="number"
                                                id="seats"
                                                name="seats"
                                                placeholder='Available seats'
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('seats', { required: "Available Seat is Required" })}
                                          />
                                          {errors.seats && <span className="text-red-500 text-sm">{errors.seats.message}</span>}
                                    </div>

                                    <div className="mb-4">
                                          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                                                Choose a class Image
                                          </label>
                                          <input
                                                type="file"
                                                id="photo"
                                                {...register('photo', { required: 'photo is required' })}
                                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.photo ? 'border-red-500' : ''}`}
                                                placeholder="Select a Image"
                                          />
                                          {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                                    </div>


                                    <div className="mb-4">
                                          <label htmlFor="number" className="block text-gray-700 font-bold mb-1">
                                                Price*
                                          </label>
                                          <input
                                                type="number"
                                                id="number"
                                                name="number"
                                                placeholder='$'
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('number', { required: 'Phone number is Required' })}
                                          />
                                          {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
                                    </div>
                                    <div>
                                          <label className='block text-gray-700 font-bold mb-1' htmlFor="category">Category *</label>
                                          <select className='w-full border border-gray-300 rounded-md px-3 py-2' id="category" {...register('category')}>
                                                {
                                                      categories.map(category=><option 
                                                            key={category.id}
                                                            value="">{category.name}</option>)
                                                }
                                                
                                          </select>
                                          {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                                    </div>
                                   

                              </div>
                              <div className=' text-center'>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-3 w-full mt-6  rounded-md">
                                          Register
                                    </button>
                              </div>
                        </form>

                  </div>
            </div>
      );
};

export default AddClass;