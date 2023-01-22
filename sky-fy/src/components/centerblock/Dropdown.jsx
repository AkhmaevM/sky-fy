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
    //  <div className='filter__list'>
    //         <ul className="filter__list--nav" onClick={(e)=>{e.target.classList.add('active__text')}}>
    //             <li className="filter__list--item">{props.item[0]}</li>
    //             <li className="filter__list--item">{props.item[1]}</li>
    //             <li className="filter__list--item">{props.item[2]}</li>
    //             <li className="filter__list--item">{props.item[3]}</li>
    //             <li className="filter__list--item">{props.item[4]}</li>
    //         </ul>
    //    </div>
       )
    
  }



export function DropwDownYear(){
    return(
        <S.FilterYear>
            <S.FilterYearRadio type="radio" value="Более новые" name="year" id="radio-1" /> <S.FilterYearValue htmlFor="radio-1">Более новые</S.FilterYearValue>
            <S.FilterYearValue type="radio" value="Более старые"name="year" id="radio-2" /> <S.FilterYearValue htmlFor="radio-2">Более старые</S.FilterYearValue>
        </S.FilterYear>
        // <div className="filter__year" >
        //     <input type="radio" value="Более новые" className="filter__year--radio" name="year" id="radio-1"/><label htmlFor="radio-1" className="filter__year--value">Более новые</label>
        //     <input type="radio" value="Более старые" className="filter__year--radio" name="year" id="radio-2"/><label htmlFor="radio-2" className="filter__year--value">Более старые</label>
        // </div>
    )
}
