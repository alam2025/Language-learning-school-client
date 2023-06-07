import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import FeaturedInstructors from './FeaturedInstructors/FeaturedInstructors';


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <PopularClasses/>
                  <FeaturedInstructors></FeaturedInstructors>
            </div>
      );
};

export default Home;