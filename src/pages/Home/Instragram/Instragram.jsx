import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ins1 from '../../../assets/instragram/ins1.jpg'
import ins2 from '../../../assets/instragram/ins2.jpg'
import ins3 from '../../../assets/instragram/ins3.jpg'
import ins4 from '../../../assets/instragram/ins4.jpg'
import ins5 from '../../../assets/instragram/ins5.jpg'

const Instragram = () => {
      return (
            <div className=' my-container bg-slate-50 p-10 rounded-md'>
                  <SectionTitle subHeading={'Follow Us'} heading={'on Instagram'}></SectionTitle>


                  <Swiper
                        slidesPerView={4}

                        spaceBetween={30}

                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-24"
                        breakpoints={{
                              500: {
                                    slidesPerView: 2,
                              },
                              768: {
                                    slidesPerView: 3,
                              },
                              1024: {
                                    slidesPerView: 4,
                              },
                        }}
                  >
                        <SwiperSlide><img src={ins1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ins3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ins4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ins5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ins1} alt="" /></SwiperSlide>

                  </Swiper>
            </div>
      );
};

export default Instragram;