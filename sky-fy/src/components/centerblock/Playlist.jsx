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
            {isLoading ? <Skeleton /> : 
            <S.TrackTitle>
                <S.TrackTitleImage>
                    <NoteSvg />
                </S.TrackTitleImage>
                
                <S.TrackTitleText>
                    <S.TrackTitleLink>
                        {props.title}
                        <S.TrackTitleSpan />
                    </S.TrackTitleLink>
                </S.TrackTitleText>
            </S.TrackTitle>
            }

            {isLoading ? <Skeleton /> : 
            <S.TrackAuthor>
            <S.TrackAuthorLink>
                        {props.author}
                    </S.TrackAuthorLink>
            </S.TrackAuthor>
            }
        
            {isLoading ? <Skeleton /> :    <S.TrackAlbum>
                <S.TrackAlbumLink>
                    {props.album}
                </S.TrackAlbumLink>
            </S.TrackAlbum>
            }
        
            {isLoading ? <Skeleton /> : 
            <S.TrackTime>
                <LikeSvg />
                <S.TrackTimeText>
                    {props.time}
                </S.TrackTimeText>
            </S.TrackTime>
            }
        </S.PlaylistTrack>
      
    </S.PlaylistItem>

    )
    

}