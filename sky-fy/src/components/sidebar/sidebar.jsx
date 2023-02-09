/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { StyledLink } from "../pages/styledForm"
import { Playlist01 , Playlist02 , Playlist03 } from "./playlist"
import * as S from './styledSidebar'

function Sidebar() {
   
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
                        <S.SidebarLink >
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                                <StyledLink to='/daily'>
                                    <Playlist01 /> 
                                </StyledLink>
                            }
                        </S.SidebarLink>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarLink>
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                            <StyledLink to='/hits'>
                                <Playlist02 />
                            </StyledLink>
                             }
                        </S.SidebarLink>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarLink>
                            
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : 
                            <StyledLink to='/indy'>
                                <Playlist03 />
                            </StyledLink>
                             }
                        </S.SidebarLink>
                    </S.SidebarItem>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
        

    )
}
export default Sidebar