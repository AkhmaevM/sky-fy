/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useThemeContext } from "../../context/theme";
import {DropDownList, DropwDownYear} from './Dropdown';
import * as S from './styledCenterblock'


export const performers = 
[
  'Michael Jakson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys'
]

export const genres = [
  'Рок',
  'Хип-хоп',
  'Поп-музыка',
  'Техно',
  'Инди'
]


export default function CenterblockFilters() {
    const {theme} = useThemeContext()
    
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

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
 

    return(

        <S.Filter>
            <S.FilterTitle>Искать по:</S.FilterTitle>

            <S.FilterButton 
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
            style={{border: isHover ? '1px solid #D9B6FF' : theme.border }} 
            onClick={toggleVisibilityPerformers}>исполнителю
                {visiblePerformers && (
                    <DropDownList list={[performers]} active ="true" />
                )}
            </S.FilterButton>


            <S.FilterButton  onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
            style={{border: isHover ? '1px solid #D9B6FF' : theme.border }} 
            onClick={toggleVisibilityYear}>году выпуска
                {visibleYear && (
                    <DropwDownYear /> 
                )}  
            </S.FilterButton>  

            <S.FilterButton  onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
              style={{border: isHover ? '1px solid #D9B6FF' : theme.border }} 
             onClick={toggleVisibilityGenres}> жанру
            {visibleGenres && (
                <DropDownList list={[genres]} /> 
              )}
            </S.FilterButton>

        </S.Filter>
      )
    

}