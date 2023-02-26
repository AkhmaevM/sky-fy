import React, { useContext }  from "react";

export const themes = {
    light: {
        color: '#000',
        background: '#F5F5F5',
    },

    dark:{
        color: '#FFFFF',
        background: '#1C1C1C',
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: ()=>{},
})

export const useThemeContext = () =>{
    const theme = useContext(ThemeContext);

    if(!theme) return theme.dark;

    return theme;
}

