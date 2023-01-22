/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import {DropDownList, DropwDownYear} from './Dropdown';
import * as S from './styledCenterblock'

const performers = 
[
  'Michael Jakson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys'
]

const genres = [
  'Рок',
  'Хип-хоп',
  'Поп-музыка',
  'Техно',
  'Инди'
]

export default function CenterblockFilters() {
    
    const [visiblePerformers, setVisiblePerformers] = useState(false);
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleGenres, setVisibleGenres] = useState(false);
    
    const toggleActive = (e)=>{
      switch (e.target.classList.contains('active')) {
        case true:
          e.target.classList.remove('active')
          break;
      
        case false:
          e.target.classList.add('active')
          break;
        
        default:
          break;
      }
      
    }
  
    const toggleVisibilityPerformers = (e)=>{
      setVisiblePerformers(!visiblePerformers)
  
      if (visibleGenres) {
        setVisibleGenres(!visibleGenres)
        
      }
      if (visibleYear) {
        setVisibleYear(!visibleYear)
      }
    
      toggleActive(e)
  
    };
    
    const toggleVisibilityGenres = (e)=>{
      setVisibleGenres(!visibleGenres)
      if (visiblePerformers) {
        setVisiblePerformers(!visiblePerformers)
        
      }
      if (visibleYear) {
        setVisibleYear(!visibleYear)
      }
      toggleActive(e)
    };
  
    const toggleVisibilityYear = (e)=>{
      setVisibleYear(!visibleYear)
      
      if (visibleGenres) {
        setVisibleGenres(!visibleGenres)
        
      }
      if (visiblePerformers) {
        setVisiblePerformers(!visiblePerformers)
        
      }
      toggleActive(e)
    };

    return(

        <S.Filter>
            <S.FilterTitle>Искать по:</S.FilterTitle>

            <S.FilterButton onClick={toggleVisibilityPerformers}>исполнителю
                {visiblePerformers && (
                    <DropDownList item={performers} />
                )}
            </S.FilterButton>


            <S.FilterButton onClick={toggleVisibilityYear}>году выпуска
                {visibleYear && (
                    <DropwDownYear /> 
                )}  
            </S.FilterButton>  

            <S.FilterButton onClick={toggleVisibilityGenres}> жанру
            {visibleGenres && (
                <DropDownList item={genres} /> 
              )}
            </S.FilterButton>

        </S.Filter>
      )
        // <div className="centerblock__filter filter">
        //     <div className="filter__title">Искать по:</div>
        //     <a className='filter__button button-author _btn-text' onClick={toggleVisibilityPerformers}>исполнителю
        //       {visiblePerformers && (
        //         <DropDownList item={performers} />
        //       )}
        //     </a>

        //     <div className="filter__button button-year _btn-text" onClick={toggleVisibilityYear}>году выпуска
        //       {visibleYear && (
        //         <DropwDownYear />
        //       )}
        //     </div>
        //     <div className="filter__button button-genre _btn-text" onClick={toggleVisibilityGenres}>жанру
        //       {visibleGenres && (
        //         <DropDownList item={genres} />
        //       )}
        //     </div>
        //   </div>

    

}