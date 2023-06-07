import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/error.json';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
            },
      };

      return (
            <div className="flex justify-center items-center h-screen bg-gray-200">
                  <div className=" max-w-screen-xl w-full  text-center p-8 pb-2 ">
                        <Lottie options={defaultOptions} height={300} width={300} />
                        <h2 className="text-2xl font-bold text-gray-800 mt-2">Oops! Something went wrong.</h2>
                        <p className="text-gray-600 mt-2">We apologize for the inconvenience. Please try again later.</p>
                        <Link className='' to='/'><button className='btn mt-6 btn-outline btn-secondary font-bold'>Go to home</button></Link>
                  </div>
            </div>
      );
};

export default ErrorPage;
