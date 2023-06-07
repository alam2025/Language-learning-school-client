import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
      const [classes,setClasses]=useState([])
      useEffect(()=>{
            fetch('./classes.json').then(res=>res.json()).then(data=>setClasses(data.slice(0,6)))
      },[])
      // console.log(classes);

      return (
            <div className='my-container my-20'>
                  <SectionTitle heading={'Popular courses'} subHeading={'Only the Best'}></SectionTitle>

                 <div className=' justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8'>
                  {

                        classes.map(item=><PopularClassCard key={item._id} item={item}></PopularClassCard>)
                  }
                 </div>
            </div>
      );
};

export default PopularClasses;