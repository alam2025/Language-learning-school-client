import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

const Main = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
            <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'light' : 'dark'}`} >

                  <Header theme={theme} toggleTheme={toggleTheme} />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default Main;