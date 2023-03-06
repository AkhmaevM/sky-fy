/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react'
import * as S from './styledCenterblock'
import { useThemeContext } from '../../context/theme'









export function DropDownList(props) {
    const {theme} = useThemeContext()

    return(
        <S.FilterList>
            <S.FilterListNav  style={{
                backgroundColor: theme.background,
                border: theme.border
            }}>
                {props.list.map((item) => {
                    (
                        <FilterItem item={item} />
                    )   
                })}
            </S.FilterListNav>
        </S.FilterList>
  
       )
    
  }




export function DropwDownYear(){
    const {theme} = useThemeContext()

    return(
        <S.FilterYear style={{background: theme.background, border: theme.border } }>
            <S.FilterYearRadio style={{color: theme.color}}  type="radio" value="Более новые" name="new" id="radio-1" /> <S.FilterYearValue htmlFor="radio-1">Более новые</S.FilterYearValue>
            <S.FilterYearValue style={{color: theme.color}} type="radio" value="Более старые" name="old" id="radio-2" /> <S.FilterYearValue htmlFor="radio-2">Более старые</S.FilterYearValue>
        </S.FilterYear>
       
    )
}

export function FilterItem(props){
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    const {theme} = useThemeContext()

    return(
        <S.FilterListItem  
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{color: isHover ?  "#B672FF" : theme.color}}>

            {props.item}
        </S.FilterListItem>
    )
}