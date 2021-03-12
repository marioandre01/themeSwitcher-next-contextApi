// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import TodoList from '../components/TodoList';
import ThemeSwitcher from '../components/ThemeSwitcher';

import * as themes from '../styles/themes';
import ThemeContext from '../styles/themes/context';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Home() {

  const [theme, setTheme] = useState(themes.dark);
  // console.log(theme);

  const toggleTheme = () => {
    setTheme( theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Consumer>    
          {theme => (
            <ThemeProvider theme={theme}>
              <ThemeSwitcher  toggleTheme={toggleTheme} />
              <TodoList />
            </ThemeProvider>
          )}       
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  )
}
