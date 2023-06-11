import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Banner = () => {
      const { user } = useAuth()



      const { data: banners = [] } = useQuery({
            queryKey: ['banners'],
            queryFn: async () => {
                  const res = await fetch('https://language-learning-school-server.vercel.app/banners');
                  // console.log(res.url);
                  return res.json()
            }
      })

      // console.log(banners);


      return (
            <Carousel>
                  {banners.map(banner =>
                        <div key={banner._id} className=' relative  h-[700px] mt-6'>
                              <img src={banner.bannerImg} className='w-full h-full object-cover ' />
                              <div className='absolute inset-0 md:w-[60%]  bg-white bg-opacity-40 flex mx-auto flex-col justify-center items-center '>
                                    <h1 className='text-dark text-4xl font-bold mb-4'>{banner.title}</h1>
                                    {
                                          !user ? (
                                                <div>
                                                      <Link to='/register'>
                                                            <button className=' bg-warning text-white font-bold px-14 py-6 rounded-md text-xl'>Sign Up</button>
                                                      </Link>
                                                      <Link to='/courses'>
                                                            <button className='text-black  hover:text-white font-bold px-14 py-6 hover:text-green-950 rounded-md text-xl underline'>Enroll Course</button>
                                                      </Link>

                                                </div>
                                          )
                                                : ''
                                    }
                              </div>
                        </div>)}

            </Carousel>
      );
};

export default Banner;