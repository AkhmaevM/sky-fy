/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import logo from '../../img/logo.png'
import * as S from './styledNav'

function Nav() {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    return(

        <S.Nav>
            <S.NavLogo>
                <S.LogoImg src={logo} alt='logo' />
            </S.NavLogo>

            <S.NavBurger onClick={toggleVisibility} onKeyDown={toggleVisibility}>
                <S.BurgerLine />
                <S.BurgerLine />
                <S.BurgerLine />
                {visible}
            </S.NavBurger>

            {visible && (
                <S.NavMenu>
                        <S.MenuList>
                            <S.MenuItem>
                                <S.MenuLink>
                                    Главное
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    Мой плейлист
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    Войти
                                </S.MenuLink>
                            </S.MenuItem>
                        </S.MenuList>
                </S.NavMenu>
            )}
        </S.Nav>

    //     <nav className="main__nav nav">
    //                 <div className="nav__logo logo">
    //                     <img className="logo__image" src={logo} alt="logo" />
    //                 </div>
    //                 <div className="nav__burger burger" onClick={toggleVisibility} onKeyDown={toggleVisibility}>
    //                     <span className="burger__line" />
    //                     <span className="burger__line" />
    //                     <span className="burger__line" />
    //                     {visible}
    //                  </div>
                   
                    
    //                 {visible && (
    //                     <div className="nav__menu menu">
    //                     <ul className="menu__list">
    //                         <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
    //                         <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
    //                         <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
    //                     </ul>
    //                 </div>
    //                 )}
    //   </nav>
    )
}  

// function showNav(){
    
//     return(
//                 <div className="nav__menu menu">
//                     <ul className="menu__list">
//                         <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
//                         <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
//                         <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
//                     </ul>
//                 </div>
//     )
// }  
  

  export default Nav