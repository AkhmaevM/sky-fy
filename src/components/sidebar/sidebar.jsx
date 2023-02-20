/* eslint-disable jsx-a11y/anchor-is-valid */
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { StyledLink } from "../pages/login/styledForm"
import { Playlist01 , Playlist02 , Playlist03 } from "./playlist"
import * as S from './styledSidebar'
import { token } from '../pages/login/register'

function Sidebar({list}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false) 
        }, 3000);
    })
    
    return (

        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarAvatar />
            </S.SidebarPersonal>

            <S.SidebarBlock>
                <S.SidebarList>
                    <S.SidebarItem>
                        <S.SidebarWrapper >
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                                <StyledLink to={token ?  `/playlist/${list[0].id}` : '/'}>
                                    <Playlist01 /> 
                                </StyledLink>
                            }
                        </S.SidebarWrapper>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarWrapper>
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                            <StyledLink to={token ? `/playlist/${list[1].id}` : '/'}>
                                <Playlist02 />
                            </StyledLink>
                             }
                        </S.SidebarWrapper>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarWrapper>
                            
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                            <StyledLink to={token ? `/playlist/${list[2].id}` : '/'}>
                                <Playlist03 />
                            </StyledLink>
                             }
                        </S.SidebarWrapper>
                    </S.SidebarItem>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
        

    )
}
export default Sidebar