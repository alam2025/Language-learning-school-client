import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
const PopularInstructorsCard = ({ instructor }) => {
      const [hovered, setHovered] = useState(false);

      const handleHover = () => {
            setHovered(!hovered);
      };
      // const socialInfoStyle = {
      //       transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      //       transition: 'transform 1s ease-in-out',
      // };
      return (
            <div
                  className=' text-center flex flex-col justify-center items-center py-3 pb-10'
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
            >
                  <div className='image-container relative'>
                        <img
                              src={instructor.image}
                              alt=""
                              className={`rounded-full w-[250px] h-[250px] `}
                        />
                        <div className='flex gap-6 px-8 social-info absolute bottom-0 right-0 bg-white p-4 transform translate-x-100 translate-y-100 transition-all duration-500 ease-in-out' style={hovered ? { transform: 'translateX(0) translateY(0)' } : {}}>
                              <button className="btn  btn-circle ">
                                    <FaFacebook size={40}></FaFacebook>
                              </button>
                              <button className="btn btn-circle ">
                                    <AiOutlineMail size={40}></AiOutlineMail>
                              </button>
                              <button className="btn btn-circle">
                                   <FaInstagram size={40}></FaInstagram>
                              </button>
                        </div>
                  </div>
                  <div className='px-8'>
                        <Link><h3 className='text-2xl hover:text-green-500 font-semibold'>{instructor.name}</h3></Link>
                        <h3 className='text-lg font-semibold'>{instructor.expertise.join(' and  ')}</h3>
                        <p>{instructor.short_description}</p>
                  </div>
            </div>
      );
};

export default PopularInstructorsCard;