/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import logo from '../../img/logo.png'
import * as S from './styledNav'
import { token } from '../pages/login/register';
import ThemeSwitcher from '../../context/themeSwitcher';

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
                                    <S.NavLink to={token ?  '/main' : '/'}
                                        style={{
                                            color: '#FFFFF',
                                        }}
                                    >
                                    Главное
                                    </S.NavLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <S.NavLink to={token ? `/playlist/${list[3].id}` : `/`}>
                                     Мой Плейлист
                                    </S.NavLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <S.NavLink to='/'>
                                        Выйти
                                    </S.NavLink>
                                </S.MenuLink>
                            </S.MenuItem>

                            <S.MenuItem>
                                <S.MenuLink>
                                <ThemeSwitcher />
                                </S.MenuLink>
                            </S.MenuItem>
                        </S.MenuList>
                </S.NavMenu>
            )}
        </S.Nav>

    )
}  



  export default Nav