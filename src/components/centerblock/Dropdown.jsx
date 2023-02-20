/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */


import * as S from './styledCenterblock'


export function DropDownList(props) {
    
    return(
        <S.FilterList>
            <S.FilterListNav>
                <S.FilterListItem>{props.item[0]}</S.FilterListItem>
                <S.FilterListItem>{props.item[1]}</S.FilterListItem>
                <S.FilterListItem>{props.item[2]}</S.FilterListItem>
                <S.FilterListItem>{props.item[3]}</S.FilterListItem>
                <S.FilterListItem>{props.item[4]}</S.FilterListItem>
            </S.FilterListNav>
        </S.FilterList>
  
       )
    
  }




export function DropwDownYear(){
    return(
        <S.FilterYear>
            <S.FilterYearRadio type="radio" value="Более новые" name="new" id="radio-1" /> <S.FilterYearValue htmlFor="radio-1">Более новые</S.FilterYearValue>
            <S.FilterYearValue type="radio" value="Более старые" name="old" id="radio-2" /> <S.FilterYearValue htmlFor="radio-2">Более старые</S.FilterYearValue>
        </S.FilterYear>
       
    )
}

