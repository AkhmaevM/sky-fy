import React, { useContext, useState, useMemo }  from "react";


export const themes = {
    light: {
        color: '#000000',
        background: '#F5F5F5',
        border:'1px solid black',
        default: false,
        burger:{
            background: 'black',
        },

        avatar:{
            background: '#F6F5F3'
        },

        progressBar:{
            background:' #D9D9D9'
        },

        skeleton:{
            baseColor: '#D9D9D9',
        }


    },

    dark:{
        color: '#FFFFFF',
        background: '#181818',
        border: '1px solid white',
        default: true,
        burger:{
            background: 'white',
        },

        avatar: {
            background: '#313131'
        },

        progressBar:{
            background:' #2E2E2E'
        },

        skeleton:{
            baseColor: '#313131',
        }
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
