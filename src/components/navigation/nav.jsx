
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import logo from '../../img/logo.png'
import logoLight from '../../img/logoLight.svg'
import * as S from './styledNav'
import { token } from '../pages/login/register';
import ThemeSwitcher from '../../context/themeSwitcher';
import { useThemeContext } from '../../context/theme';

function Nav({list}) {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    
    const {theme} = useThemeContext()
  

    return(

        <S.Nav >
            <S.NavLogo>
                {
                    theme.default ? <S.LogoImg src={logo} alt='logo' /> : <S.LogoImg src={logoLight} alt='logo' />      
                }
                
            </S.NavLogo>

            <S.NavBurger onClick={toggleVisibility} onKeyDown={toggleVisibility}
                
            >
                <S.BurgerLine style={{backgroundColor:theme.burger.background}}/>
                <S.BurgerLine style={{backgroundColor:theme.burger.background}}/>
                <S.BurgerLine style={{backgroundColor:theme.burger.background}}/>
                {visible}
            </S.NavBurger>

            {visible && (
                <S.NavMenu
                  
                >
                        <S.MenuList  >
                            <S.MenuItem>
                                <S.MenuLink>
                                    <S.NavLink to={token ?  '/main' : '/'}
                                        style={
                                            { color: theme.color }
                                         }
                                    >
                                    Главное
                                    </S.NavLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <S.NavLink to={token ? `/playlist/${list[3].id}` : `/`}
                                        style={
                                            { color: theme.color }
                                         }
                                    >
                                     Мой Плейлист
                                    </S.NavLink>
                                </S.MenuLink>
                            </S.MenuItem>
                            <S.MenuItem>
                                <S.MenuLink>
                                    <S.NavLink to='/'
                                        style={
                                            { color: theme.color }
                                         }
                                    >
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