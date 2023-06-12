import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };
      return (
            <div>
                  <ThemeContext.Provider value={{theme,toggleTheme} }>
                        {children}
                  </ThemeContext.Provider>
            </div>
      );
};

export default ThemeProvider;