import React, { useContext, useState, useMemo }  from "react";


export const themes = {
    light: {
        color: '#000000',
        background: '#F5F5F5',
        border:'1px solid #00000',
    },

    dark:{
        color: '#FFFFFF',
        background: '#181818',
        border: '1px solid #FFFFFF',
    }
};

export const ThemeContext = React.createContext({
    theme:  themes.dark,
    toggleTheme: ()=>{}
})


export const useThemeContext = () =>{
    const context = useContext(ThemeContext);

    if(!context) throw new Error(
      'Ошибка, контекст вызван из вне провайдера Theme'
    );

    return context;
}


export default function ThemeProvider({children}) {

    const [currentTheme, setCurrentTheme] = useState(themes.dark)

    const toggleTheme= () => {
        setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark)
    }

    const memoContextTheme = useMemo(() => ({theme: currentTheme, toggleTheme}), [currentTheme])

    return (
      <ThemeContext.Provider value={memoContextTheme}>
       {children}
     </ThemeContext.Provider>
    )
}
