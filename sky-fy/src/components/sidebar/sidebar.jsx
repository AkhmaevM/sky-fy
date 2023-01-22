/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Playlist01 , Playlist02 , Playlist03 } from "./playlist"
import 'react-loading-skeleton/dist/skeleton.css'
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
                        <S.SidebarLink>
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : <Playlist01 /> }
                        </S.SidebarLink>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarLink>
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : <Playlist02 /> }
                        </S.SidebarLink>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <S.SidebarLink>
                            {isLoading ? <Skeleton height={150} baseColor="#313131"/> : <Playlist03 /> }
                        </S.SidebarLink>
                    </S.SidebarItem>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
        

        // <div className="main__sidebar sidebar">
        //             <div className="sidebar__personal">
        //                 <p className="sidebar__personal-name">Sergey.Ivanov</p>
        //                 <div className="sidebar__avatar" />
        //             </div>  
        //             <div className="sidebar__block">
        //                 <div className="sidebar__list" >
        //                         <div className="sidebar__item">
        //                             <a className="sidebar__link" href="#">
        //                                 {isLoading ? <Skeleton height={150} baseColor="#313131"/> : <Playlist01 /> }
        //                             </a>
        //                        </div>
        //                       <div className="sidebar__item">
        //                              <a className="sidebar__link" href="#">
        //                              {isLoading ? <Skeleton height={150} baseColor="#313131" /> : <Playlist02 /> }
        //                              </a>
        //                         </div>

        //                         <div className="sidebar__item">
        //                              <a className="sidebar__link" href="#">
        //                              {isLoading ? <Skeleton height={150} baseColor="#313131" /> : <Playlist03 /> }
        //                              </a>
        //                         </div>
    
                              
        //                 </div>
        //             </div>
        //         </div>
    )
}
export default Sidebar