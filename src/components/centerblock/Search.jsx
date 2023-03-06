import {ReactComponent as SearchSvg} from '../../img/icon/search.svg'
import * as S from './styledCenterblock'
import { useThemeContext } from "../../context/theme";

export default function CenterBlockSearch() {
    const {theme} = useThemeContext()

    return(
        <S.CenterblockSearch>
            <SearchSvg className="search__svg"/>
            <S.SearchText type="search"
              placeholder="Поиск"
              name="search" 
              style={
                {color: theme.color}
              }
              /> 

             
        </S.CenterblockSearch>
    )
}