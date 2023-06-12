import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { FaCheck} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Pricing = () => {
      return (
            <div className=' my-container'>
                  <SectionTitle subHeading={'Our Pricing'} heading={'Flexible Pricing Plans'}></SectionTitle>

                  <section className='mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='hover:shadow-2xl p-10 text-center leading-8'>
                              <div className=' flex flex-col gap-4'>
                                    <h1 className=' text-3xl font-bold'>Standard User</h1>
                                    <h3><span className=' text-3xl text-indigo-700'>$49.90/</span><span>month</span></h3>
                              </div>
                              <div className="divider text-2xl"></div>

                              <ul className="flex flex-col gap-4 mb-6">
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          3 Language In A Month
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          10 Excercise In A Day
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          5 Live Speaking
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          Get Certificated
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          2 Level Test
                                    </li>
                              </ul>

                              <Link to='/register'><button className='mt-4 btn btn-primary'>Register Now</button></Link>
                        </div>
                        <div className='hover:shadow-2xl  p-10 text-center leading-8'>
                              <div className=' flex flex-col gap-4'>
                                    <h1 className=' text-3xl font-bold'>Diamond User</h1>
                                    <h3><span className=' text-3xl text-indigo-700'>$99.90/</span><span>month</span></h3>
                              </div>
                              <div className="divider text-2xl"></div>

                              <ul className="flex flex-col gap-4 mb-6">
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          10 Language In A Month
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          20 Excercise In A Day
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          Achievement Award
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          15 Live Speaking
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          Get Certificated
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          8 Level Test
                                    </li>
                              </ul>

                              <Link to='/register'><button className='mt-4 btn btn-primary'>Register Now</button></Link>
                        </div>
                        <div className='hover:shadow-2xl  p-10 text-center leading-8'>
                              <div className=' flex flex-col gap-4'>
                                    <h1 className=' text-3xl font-bold'>Premium User</h1>
                                    <h3><span className=' text-3xl text-indigo-700'>$149.90/</span><span>month</span></h3>
                              </div>
                              <div className="divider text-2xl"></div>

                              <ul className="flex flex-col gap-4 mb-6">
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          15 Language In A Month
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          30 Excercise In A Day
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          10 Live Speaking
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          Get Certificated
                                    </li>
                                    <li>
                                          <FaCheck className="inline-block mr-2 text-green-500" />
                                          4 Level Test
                                    </li>
                              </ul>

                              <Link to='/register'><button className='mt-4 btn btn-primary'>Register Now</button></Link>
                        </div>
                  </section>
            </div>
      );
};

export default Pricing;