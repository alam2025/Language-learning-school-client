import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import { useParams } from 'react-router-dom';
import MyClasses from '../MyClasses/MyClasses';
import Swal from 'sweetalert2';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import { Helmet } from 'react-helmet';


const UpdateClass = () => {
      const { id } = useParams();

      const [axiosSecure] = useAxiosSecure()
      const { user } = useAuth();
      const { register,
            handleSubmit,
            formState: { errors },
            reset,
            setValue } = useForm();


      //handle form
      const onSubmit = async (data) => {
            
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, Updateit!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.patch(`/instructor/class/update/${thisClass._id}?email=${user?.email}`,data)
                        .then(res=>{
                              if(res.data.modifiedCount)
                              {
                                    reset()
                                    Swal.fire(
                                          'Update!',
                                          'Your file has been Updated.',
                                          'success'
                                    )
                              }
                              else{
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'warning',
                                          title: 'No changed data',
                                          showConfirmButton: false,
                                          timer: 1500
                                        })
                              }
                        })
                        // console.log(data);
                        
                  }
            })
      }


      // all category load 
      const { data: categories = [] } = useQuery({
            queryKey: ['category'],
            queryFn: async () => {
                  const res = await fetch('/category.json');
                  return res.json()
            }
      })

      //find current document
      const { data: thisClass = [] } = useQuery({
            queryKey: ['thisClass', user?.email],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/findClass/${id}?email=${user?.email}`);
                  return res.data
            }
      })

      // console.log(thisClass);
      //set Default value
      useEffect(() => {
            if (thisClass) {
                  setValue('name', thisClass.name)
                  setValue('photo', thisClass.image)
                  setValue('price', thisClass.price)
                  setValue('category', thisClass.category)
            }
      }, [setValue, thisClass.image])


      return (
            <div>
                  <Helmet><title>Learning Langugae | Update Class</title></Helmet>
                  <SectionTitle heading={'Update your class'}></SectionTitle>
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
                                                {...register('name')}
                                          />

                                    </div>




                                    <div className="mb-4">
                                          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                                                Choose a class Image
                                          </label>
                                          <input
                                                type="file"

                                                id="photo"
                                                {...register('photo')}
                                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.photo ? 'border-red-500' : ''}`}
                                                placeholder="Select a Image"
                                          />

                                    </div>


                                    <div className="mb-4">
                                          <label htmlFor="price" className="block text-gray-700 font-bold mb-1">
                                                Price*
                                          </label>
                                          <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                placeholder='$'
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                {...register('price')}
                                          />

                                    </div>
                                    <div>
                                          <label className='block text-gray-700 font-bold mb-1' htmlFor="category">Category *</label>
                                          <select className='w-full border border-gray-300 rounded-md px-3 py-2' id="category" {...register('category')}>
                                                <option>Choose a language</option>
                                                {
                                                      categories.map(category => <option
                                                            key={category.id}
                                                            value={category.name}>{category.name}</option>)
                                                }

                                          </select>

                                    </div>


                              </div>
                              <div className=' text-center'>
                                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-900 px-4 py-3 w-full mt-6  rounded-md">
                                          Update
                                    </button>
                              </div>
                        </form>

                  </div>
            </div>
      );
};

export default UpdateClass;