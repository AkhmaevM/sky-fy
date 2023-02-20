import {ReactComponent as SearchSvg} from '../../img/icon/search.svg'
import * as S from './styledCenterblock'

export default function CenterBlockSearch() {
    
    return(
        <S.CenterblockSearch>
            <SearchSvg className="search__svg"/>
            <S.SearchText type="search"
              placeholder="Поиск"
              name="search" /> 
        </S.CenterblockSearch>
    )
}