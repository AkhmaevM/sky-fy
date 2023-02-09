/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import logo from '../../img/logo.png'
import * as S from './styledNav'
import { StyledLink } from '../pages/styledForm';

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
                                    <StyledLink to='/main'>
                                    Главное
                                    </StyledLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <StyledLink to='/tracks'>
                                     Мой Плейлист
                                    </StyledLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <StyledLink to='/'>
                                        Войти
                                    </StyledLink>
                                </S.MenuLink>
                            </S.MenuItem>
                        </S.MenuList>
                </S.NavMenu>
            )}
        </S.Nav>

    )
}  



  export default Nav