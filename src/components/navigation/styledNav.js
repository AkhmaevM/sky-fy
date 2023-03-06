import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
   
    
    padding: 20px 0 20px 36px;
`

export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`
export const LogoImg = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`

export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor:pointer;
`

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
`

export const NavMenu = styled.div`
    display: block;
    visibility: visible;
`

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
    list-style-type: none;
`

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`

export const MenuLink = styled.p`
    
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
   
    &:hover{
        cursor:pointer;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    
`

export const ThemeSwitcherBtn = styled.button`
  border-radius: 50%;
  
  width: 39px;
  height: 39px;
 
  cursor:pointer;
`
