import { ThemeSwitcherBtn } from "../components/navigation/styledNav";
import {ReactComponent as DarkTheme} from '../img/icon/DarkTheme.svg'
import { useThemeContext } from "./theme";

export default function ThemeSwitcher() {
    const {toggleTheme} = useThemeContext()

    return (
    <ThemeSwitcherBtn onClick={toggleTheme} >
        <DarkTheme />
    </ThemeSwitcherBtn>)
};