import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
const PopularInstructorsCard = ({ instructor }) => {
      const [hovered, setHovered] = useState(false);
      const { name, photo, expertise, email, facebook } = instructor;

      const handleHover = () => {
            setHovered(!hovered);
      };
      // const socialInfoStyle = {
      //       transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      //       transition: 'transform 1s ease-in-out',
      // };
      return (
            <div
                  className=' p-6 border mx-auto shadow overflow-hidden'
            >
                  <div className=' overflow-hidden'>
                        <img className='transition duration-1000 hover:transform hover:scale-150   h-[200px]' src={photo} alt="" />
                  </div>
                  <div>
                        <h1 className=' text-xl font-semibold'>{name}</h1>
                        <p> {expertise || 'Unknown'}</p>
                        <div className=' flex flex-col mt-4'>
                              <p>{email}</p>
                              <p>{facebook}</p>
                        </div>
                  </div>
            </div>
      );
};

export default PopularInstructorsCard;