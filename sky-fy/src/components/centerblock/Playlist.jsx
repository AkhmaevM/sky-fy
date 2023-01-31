import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import * as S from './styledCenterblock'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
// import {ReactComponent as SpriteSvg} from '../../img/icon/sprite.svg'

export default function PlaylistItem(props) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)    
        }, 3000);

    })
    return(
    <S.PlaylistItem>
      
      <S.PlaylistTrack>
              
            <S.TrackTitle>
                <S.TrackTitleImage>
                   {isLoading ? <Skeleton height={51} baseColor="#313131" /> : <NoteSvg />}
                </S.TrackTitleImage>
                
                <S.TrackTitleText>
                    {isLoading ? <Skeleton width={356} height={19} baseColor="#313131" /> : <S.TrackTitleLink>
                        {props.title}
                        <S.TrackTitleSpan>{props.gray}</S.TrackTitleSpan>
                    </S.TrackTitleLink>}
                </S.TrackTitleText>
            </S.TrackTitle>
            
            {isLoading ? <Skeleton height={19} baseColor="#313131" width={271} /> :
            <S.TrackAuthor>
                    <S.TrackAuthorLink>
                        {props.author}
                    </S.TrackAuthorLink>
            </S.TrackAuthor>}
            
        
            {isLoading ? <Skeleton baseColor="#313131"  height={19} width={271} /> : 
            <>
            <S.TrackAlbum>
                <S.TrackAlbumLink>
                    {props.album}
                </S.TrackAlbumLink>
            </S.TrackAlbum>
            
            <S.TrackTime>

                    <LikeSvg />
                    <S.TrackTimeText>
                     {props.time}
                    </S.TrackTimeText>
            </S.TrackTime>
            </>
            
                }
        </S.PlaylistTrack>
      
    </S.PlaylistItem>

    )
    

}