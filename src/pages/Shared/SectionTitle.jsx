import React from 'react';
import { useForm } from 'react-hook-form';

const SectionTitle = ({ heading, subHeading }) => {
    
      return (
            <div className=' my-container flex flex-col gap-4 justify-center items-center mb-16'>
                  {subHeading && <p className=' text-indigo-800 text-xl'>-------{subHeading}--------</p>}
                  {heading && <h3 className=' text-4xl font-extrabold uppercase'>{heading}</h3>}
                  

                  

            </div>
      );
};

export default SectionTitle;