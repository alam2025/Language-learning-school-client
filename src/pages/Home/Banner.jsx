import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import banner_img from '../../assets/banner/banner-2.jpg'

const Banner = () => {
      const { user } = useAuth()
      console.log(user);



      // const { data: banners = [] } = useQuery({
      //       queryKey: ['banners'],
      //       queryFn: async () => {
      //             const res = await fetch('https://language-learning-school-server.vercel.app/banners');
      //             // console.log(res.url);
      //             return res.json()
      //       }
      // })

      // console.log(banners);


      return (
            <div className="hero bg-fixed min-h-screen" style={{backgroundImage:`url(${banner_img})`}}>
                  <div className="hero-overlay bg-opacity-50"></div>
                  <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                              <h1 className="mb-5 text-5xl font-bold">Learn New Languages and Move Forward</h1>
                              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                              {
                                    user?.name?<Link to='/register'><button className="btn btn-primary">Get Started</button></Link>:
                                    <Link to='/register'><button className="btn btn-primary">Explore Courses</button></Link>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Banner;