import { useThemeContext } from "./theme";
import { ThemeSwitcherBtn } from "../components/navigation/styledNav";
import {ReactComponent as DarkTheme} from '../img/icon/DarkTheme.svg'

export default function ThemeSwitcher() {
    const { toggleTheme } = useThemeContext();
    
    return (
    <ThemeSwitcherBtn onClick={toggleTheme}>
        <DarkTheme />
        {console.log(toggleTheme)}
    </ThemeSwitcherBtn>)
};