import  {useState, useMemo,} from "react"
import { themes, ThemeContext } from "./theme"
import Content from "../components/Content"

export default function ThemeProvider() {

    const [currentTheme, setCurrentTheme] = useState(themes.dark)

    const toggleTheme= () => {
        setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark)
    }

    const memoContextTheme = useMemo(() => ({theme: currentTheme, toggleTheme}), [currentTheme])

    return (
      <ThemeContext.Provider value={memoContextTheme}>
       <Content 
        
       />
     </ThemeContext.Provider>
    )
}