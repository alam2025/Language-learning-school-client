import React from 'react';
import { Parallax, Background } from 'react-parallax';
import LibraryBanner from '../../assets/banner/Library-banner.jpg';

const SectionBanner = ({title,route}) => {
      // const title='ABC'
      return (
            <div className='my-20'>
                  <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage={LibraryBanner}
                        bgImageAlt="the dog"
                        strength={-200}
                  >
                        <div className="hero h-[400px] " >
                              <div className="hero-overlay bg-opacity-60"></div>
                              <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                                          <h4 className='mt-5 text-2xl'>{route}</h4>

                                    </div>
                              </div>
                        </div>
                  </Parallax>
            </div>
      );
};

export default SectionBanner;
