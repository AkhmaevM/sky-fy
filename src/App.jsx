
import { useState, useMemo } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './styledApp'
import AppRoutes from './components/pages/routes';
import { token } from './components/pages/login/register';
import { themes, ThemeContext } from './context/theme';


function App() {
  
const [currentTheme, setCurrentTheme] = useState(themes.dark)

  function toggleTheme () {
      setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark)
      console.log('theme is change');
  }
  const memoContextTheme = useMemo(() => ({theme: currentTheme, toggleTheme}), [currentTheme ])


  
  return(
    <ThemeContext.Provider value={memoContextTheme}>
      <S.Wrapper 
        style={
          {
            backgroundColor: currentTheme.background,
            color: currentTheme.color,  
          }}
           >
            <S.Container
                style={
                  {
                    backgroundColor: currentTheme.background,
                    color: currentTheme.color,
                   
                  }}
            >
        <AppRoutes token={token}  />
        </S.Container>
      </S.Wrapper>
      </ThemeContext.Provider>
  )
}

export default App;
