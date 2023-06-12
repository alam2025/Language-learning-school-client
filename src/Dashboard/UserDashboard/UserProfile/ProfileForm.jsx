import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import Swal from 'sweetalert2';
const hostingToen = import.meta.env.VITE_IMBGG_KEY;
const ProfileForm = ({ user }) => {
      const [axiosSecure] = useAxiosSecure()
      const { register, handleSubmit, formState: { errors }, setValue } = useForm();
      const [uploadedPhoto, setUploadedPhoto] = useState(null);
      const image_url = `https://api.imgbb.com/1/upload?key=${hostingToen}`;

      const onSubmit = async (data) => {
            // console.log(data);





            const { name,
                  email,
                  expertise,
                  photoUrl,
                  bio,
                  facebook
            } = data;

            const UpdatedUser = {
                  name,
                  email,
                  photo: photoUrl,
                  expertise,
                  bio,
                  facebook

            }

            axiosSecure.patch(`/updateInstructorInfo/${user?._id}`, UpdatedUser)
                  .then(res => {
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your class has been Added',
                                    showConfirmButton: false,
                                    timer: 1500
                              })
                        }
                  })




      };

      useEffect(() => {
            setValue('email', user.email);
            setValue('name', user.name);
            setValue('photoUrl', user?.photo);
            setValue('bio',user?.bio);
            setValue('expertise',user?.expertise);
            setValue('facebook',user?.facebook);


      }, [user])

      const uploadImg = async (event) => {
            const file = event.target.files[0];
            const formData = new FormData();

            formData.append('image', file);
            const response = await axios.post(`${image_url}`, formData);

            if (response.data && response.data.data && response.data.data.url) {
                  if (response.data.success) {
                        const imageUrl = response.data.data.display_url;

                        setValue('photoUrl', imageUrl)
                  }
            }
            // console.log(file);
            setUploadedPhoto(file);
      };

      return (
            <div className=' my-container bg-slate-300 py-16 px-16 rounded-lg lg:px-32 mb-24'>
                  <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                    <label htmlFor="name" className="block mb-2 font-bold">Name:</label>
                                    <input type="text" id="name" {...register('name', { required: true })} className="border border-gray-300 rounded-md p-2 w-full" />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                              </div>

                              <div>
                                    <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
                                    <input type="email" id="email" {...register('email', { required: true })} className="border border-gray-300 rounded-md p-2 w-full" />
                                    {errors.email && <span className="text-red-500">This field is required</span>}


                              </div>

                              <div>
                                    <div>
                                          <label htmlFor="photo" className="block mb-2 font-bold">Photo:</label>
                                          <input type="file" id="photo" onChange={uploadImg} className="border border-gray-300 rounded-md p-2 w-full" />
                                          {uploadedPhoto && <span className="text-green-500">Photo uploaded successfully!</span>}
                                    </div>
                                    <div>
                                          <input readOnly id='photoUrl' {...register('photoUrl')} className="border border-gray-300 rounded-md p-2 w-full" type="text" placeholder='photo url' name='photoUrl' />
                                    </div>
                              </div>
                              <div >
                                    <label htmlFor="expertise" className="block mb-2 font-bold">Expertise Language:</label>
                                    <input type="text" id="expertise" {...register('expertise', { required: true })} className="border border-gray-300 rounded-md p-2 w-full" />
                                    {errors.expertise && <span className="text-red-500">This field is required</span>}
                              </div>
                              <div >
                                    <label htmlFor="facebook" className="block mb-2 font-bold">Facebook Url:</label>
                                    <input type="text" id="facebook" {...register('facebook', { required: true })} className="border border-gray-300 rounded-md p-2 w-full" />
                                    {errors.facebook && <span className="text-red-500">This field is required</span>}
                              </div>



                              <div className="md:col-span-2">
                                    <label htmlFor="bio" className="block mb-2 font-bold">Bio:</label>
                                    <textarea id="bio" {...register('bio', { required: true, maxLength: 100 })} className="border border-gray-300 rounded-md p-2 w-full" />
                                    {errors.bio && errors.bio.type === 'required' && <span className="text-red-500">This field is required</span>}
                                    {errors.bio && errors.bio.type === 'maxLength' && <span className="text-red-500">Maximum 100 words allowed</span>}
                              </div>


                        </div>

                        <div className="flex justify-end mt-4">
                              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">SAVE</button>
                        </div>
                  </form>
            </div>
      );
};

export default ProfileForm;