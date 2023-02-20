/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import logo from '../../img/logo.png'
import * as S from './styledNav'
import { StyledLink } from '../pages/login/styledForm';
import { token } from '../pages/login/register';

function Nav({list}) {
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
                                    <StyledLink to={token ?  '/main' : '/'}>
                                    Главное
                                    </StyledLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <StyledLink to={token ? `/playlist/${list[3].id}` : `/`}>
                                     Мой Плейлист
                                    </StyledLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <StyledLink to='/'>
                                        Выйти
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