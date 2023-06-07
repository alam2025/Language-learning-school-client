import React from 'react';

const Footer = () => {
      return (
            <div className=' mt-auto  bg-[#3E3C36] text-center py-28'>
                  <div className=''>
                        <h1 className=' text-6xl font-extrabold text-[#969696]'>Newsletter</h1>
                        <p className=' text-2xl font-bold text-blue-500'>Get the Latest News and Special Offers </p>




                        <div className="form-control mx-[20%] my-8">

                              <div className="relative">
                                    <input type="text" placeholder="Your Email" className="input rounded-none py-8 input-bordered w-full pr-16" />
                                    <button className="btn bg-[#70EDC7] hover:bg-emerald-600 text-white absolute top-0 right-0 rounded-none py-8 md:px-10 font-bold">Subscribe</button>
                              </div>

                        </div>

                        <div className=' grid grid-cols-2 md:grid-cols-4 divide-x-2'>
                              <div>
                                    <h1 className=' text-3xl font-bold text-white'>Conditions</h1>
                                    <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                          <a className='hover:text-green-500' href="/">For Semester Courses</a>
                                          <a className='hover:text-green-500' href="/">For 3-week Intensive Course</a>
                                          <a className='hover:text-green-500' href="/">For Intensive Summer Courses</a>
                                          <a className='hover:text-green-500' href="/">For Individual Courses</a>
                                    </div>
                              </div>
                              <div>
                                    <h1 className=' text-3xl font-bold text-white'>Menu</h1>
                                    <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                          <a className='hover:text-green-500' href="/">About Us</a>
                                          <a className='hover:text-green-500' href="/">Courses</a>
                                          <a className='hover:text-green-500' href="/">Language Holidays</a>
                                          <a className='hover:text-green-500' href="/">Language Corner</a>
                                          <a className='hover:text-green-500' href="/">Gallery</a>
                                          <a className='hover:text-green-500' href="/">FAQ</a>
                                    </div>
                              </div>
                              <div>
                                    <h1 className=' text-3xl font-bold text-white'>Useful Info</h1>
                                    <div className=' text-slate-400  mt-6 flex flex-col gap-2 text-lg'>
                                          <a className='hover:text-green-500' href="/">Working with Us</a>
                                          <a className='hover:text-green-500' href="/">Online Placement Test</a>
                                          <a className='hover:text-green-500' href="/">Social Programme</a>
                                          <a className='hover:text-green-500' href="/">Testimonials</a>
                                          <a className='hover:text-green-500' href="/">Student Handbook</a>
                                          <a className='hover:text-green-500' href="/">Study Guide</a>
                                    </div>
                              </div>
                              <div>
                                    <h1 className=' text-3xl font-bold text-white'>Social</h1>
                                    <div className='text-green-500  mt-6 flex flex-col gap-2 text-lg'>
                                          <a href="/">Facebook</a>
                                          <a href="/">Instragram</a>
                                          <a href="/">Twitter</a>
                                    </div>
                              </div>

                        </div>

                  </div>

                  <p className=' text-center mt-12'><span className=' text-green-500'>Language Learning School</span> <span className=' text-white'>&copy; 2023 All Rights Reserved</span></p>
            </div>
      );
};

export default Footer;