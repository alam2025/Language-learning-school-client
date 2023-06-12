import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import FeaturedInstructors from './FeaturedInstructors/FeaturedInstructors';
import SpecialServices from './Dialog/SpecialServices';
import Pricing from './Pricing/Pricing';
import Instragram from './Instragram/Instragram';


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <SpecialServices></SpecialServices>
                  <PopularClasses/>
                  <FeaturedInstructors></FeaturedInstructors>

                  <Pricing></Pricing>

                  <div className=' bg-slate-100 shadow-lg mb-24 py-16'><Instragram></Instragram></div>
                  
            </div>
      );
};

export default Home;