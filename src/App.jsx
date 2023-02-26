/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';

import 'react-loading-skeleton/dist/skeleton.css'
import { ThemeContext } from 'styled-components';
import * as S from './styledApp'
import AppRoutes from './components/pages/routes';
import { token } from './components/pages/login/register';
import { themes, useThemeContext } from './context/theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  
  const toggleTheme=()=>{
    if(currentTheme === themes.dark){
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark)
  }

const {theme} = useThemeContext()


  return(
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
     
      <S.Wrapper
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <AppRoutes token={token} />
    </S.Wrapper>
    </ThemeContext.Provider>
  )
}

export default App;
