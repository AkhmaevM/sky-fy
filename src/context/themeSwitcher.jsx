import { ThemeSwitcherBtn } from "../components/navigation/styledNav";
import {ReactComponent as DarkTheme} from '../img/icon/DarkTheme.svg'
import {ReactComponent as LightTheme} from '../img/icon/LightTheme.svg'
import { useThemeContext } from "./theme";

export default function ThemeSwitcher() {
    const {toggleTheme, theme} = useThemeContext()

    return (
    <ThemeSwitcherBtn 
        style={{
            border: theme.border,
            backgroundColor: theme.background,
           
        }}
    onClick={toggleTheme} >
       {theme.default ?  <DarkTheme /> : <LightTheme style={{paddingTop: "5px"}}/>}
    </ThemeSwitcherBtn>)
};