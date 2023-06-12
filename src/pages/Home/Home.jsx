import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import FeaturedInstructors from './FeaturedInstructors/FeaturedInstructors';
import SpecialServices from './Dialog/SpecialServices';
import Pricing from './Pricing/Pricing';
import Instragram from './Instragram/Instragram';
import { useContext } from 'react';
import { ThemeContext } from '../../provider/ThemeProvider';


const Home = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
            <div className={` ${theme === 'dark' ? 'dark' : 'light'}`}>

                  <Banner></Banner>
                  <button
                        className="px-4 py-2 mt-4 rounded bg-blue-500 text-white"
                        onClick={toggleTheme}
                  >
                        Toggle Theme
                  </button>
                  <SpecialServices></SpecialServices>
                  <PopularClasses />
                  <FeaturedInstructors></FeaturedInstructors>

                  <Pricing></Pricing>

                  <div className=' bg-slate-100 shadow-lg mb-24 py-16'><Instragram></Instragram></div>

            </div>
      );
};

export default Home;