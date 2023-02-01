import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {ReactComponent as DislikeSvg} from '../../img/icon/dislike.svg'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NextSvg} from '../../img/icon/next.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
import { ReactComponent as PrevSvg } from '../../img/icon/prev.svg'
import {ReactComponent as PlaySvg} from '../../img/icon/play.svg'
import {ReactComponent as RepeatSvg} from '../../img/icon/repeat.svg'
import {ReactComponent as ShuffleSvg} from '../../img/icon/shuffle.svg'
import {ReactComponent as VolumeSvg} from '../../img/icon/volume.svg'
import * as S from './styledBar'


function Bar() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
           setIsLoading(false) 
        }, 3000);
    })


    return (

        <S.Bar>
            <S.BarContent>
                <S.BarPlayerProgress />
                <S.BarPlayerBlock>
                    
                    <S.BarPlayer>
                        <S.PlayerControls>
                                <S.PlayerBtnPrev>
                                    <PrevSvg />
                                </S.PlayerBtnPrev>

                                <S.PlayerBtnPlay>
                                    <PlaySvg />
                                </S.PlayerBtnPlay>

                                <S.PlayerBtnNext>
                                    <NextSvg />
                                </S.PlayerBtnNext>

                                <S.PlayerBtnRepeat>
                                    <RepeatSvg />
                                </S.PlayerBtnRepeat>

                                <S.PlayerBtnShuffle>
                                    <ShuffleSvg />
                                </S.PlayerBtnShuffle>
                        </S.PlayerControls>
                       
                        <S.PlayerTrackPlay>
                            <S.TrackPlayContain>    
                                <S.TrackPlayImg>
                                    {isLoading ? <Skeleton baseColor="#313131" /> : <NoteSvg />}
                                </S.TrackPlayImg>

                                <S.TrackPlayAuthor>
                                {isLoading ? <Skeleton height={15} baseColor="#313131" /> : <S.TrackPlayAuthorLink>Ты та..</S.TrackPlayAuthorLink>}
                                </S.TrackPlayAuthor>

                                <S.TrackPlayAlbum>
                                    {isLoading ? <Skeleton height={15} baseColor="#313131" / > : <S.TrackPlayAlbumLink>Баста</S.TrackPlayAlbumLink>}
                                </S.TrackPlayAlbum>
                            </S.TrackPlayContain>

                            <S.TrackPlayLikeDislike>
                                <S.TrackPlayLike>
                                    <LikeSvg />
                                </S.TrackPlayLike>

                                <S.TrackPlayDislike>
                                    <DislikeSvg />
                                </S.TrackPlayDislike>

                            </S.TrackPlayLikeDislike>
                        </S.PlayerTrackPlay>
                    </S.BarPlayer>
                    
                    <S.Volume>
                        <S.VolumeContent>
                        <S.VolumeImage>
                            <VolumeSvg />
                        </S.VolumeImage>

                        <S.VolumeProgress>
                            <S.VolumeProgressLine type="range" name="range" />
                        </S.VolumeProgress>
                        </S.VolumeContent>
                    </S.Volume>
                </S.BarPlayerBlock>
                
            </S.BarContent>
            
        </S.Bar>

        
    )
}

export default Bar