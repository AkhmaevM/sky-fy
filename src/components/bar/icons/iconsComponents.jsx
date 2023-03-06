import { useThemeContext } from "../../../context/theme";


export default function IconItem(props){
    const {theme} = useThemeContext()

    return(
        theme.default ? props.defaultIcon : props.lightIcon
    )
}

