import React from 'react';
import { useForm } from 'react-hook-form';

const SectionTitle = ({ heading, subHeading }) => {
    
      return (
            <div className=' flex flex-col gap-4 justify-center items-center mb-16'>
                  {heading && <h3 className=' text-4xl font-extrabold uppercase'>{heading}</h3>}
                  {subHeading && <p className=' text-orange-400 text-xl'>--------- {subHeading}-------------</p>}

                  

            </div>
      );
};

export default SectionTitle;