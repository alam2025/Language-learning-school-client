import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
      const [banners, setBanner] = useState([])

      useEffect(() => {
            fetch('/banner-img.json')
                  .then(res => res.json()).then(data => setBanner(data))
      }, [])


      return (
            <Carousel>
                  {banners.map(banner =>
                        <div className=' relative  h-[700px]'>
                              {/* <img src={banner.bannerImg} />
                              <div className=' top-40  absolute md:top-1/2'>
                                    <h1>{banner.title}</h1>
                                    <div>
                                          <button>sign up</button>
                                          <button>Learn More</button>
                                    </div>
                              </div> */}
                              <img src={banner.bannerImg} className='w-full h-full object-cover' />
                              <div className='absolute inset-0 md:w-[60%]  bg-white bg-opacity-40 flex mx-auto flex-col justify-center items-center '>
                                    <h1 className='text-dark text-4xl font-bold mb-4'>{banner.title}</h1>
                                    <div>
                                          <button className=' bg-warning text-white font-bold px-14 py-6 rounded-md text-xl'>Sign Up</button>
                                          <button className='text-black hover:bg-warning hover:text-white font-bold px-14 py-6 rounded-md text-xl underline'>Learn More</button>
                                         
                                    </div>
                              </div>
                        </div>)}

            </Carousel>
      );
};

export default Banner;