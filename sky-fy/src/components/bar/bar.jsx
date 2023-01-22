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

        // <div className="bar">
        //         <div className="bar__content">
        //             <div className="bar__player-progress" />
        //             <div className="bar__player-block">
        //                 <div className="bar__player player">
        //                     <div className="player__controls">
        //                         <div className="player__btn-prev">
        //                             <PrevSvg />
        //                         </div>
        //                         <div className="player__btn-play _btn">
        //                             <PlaySvg />
        //                         </div>
        //                         <div className="player__btn-next">
        //                             <NextSvg />
        //                         </div>
        //                         <div className="player__btn-repeat _btn-icon">
        //                             <RepeatSvg />
        //                         </div>
        //                         <div className="player__btn-shuffle _btn-icon">
        //                             <ShuffleSvg />
        //                         </div>
        //                     </div>
                            
        //                     <div className="player__track-play track-play">
        //                         <div className="track-play__contain">
        //                             <div className="track-play__image">
        //                                 {isLoading ? <Skeleton baseColor="#313131" /> : <NoteSvg />}
        //                             </div>
        //                             <div className="track-play__author">
        //                                 {isLoading ? <Skeleton height={15} baseColor="#313131" /> : <a className="track-play__author-link" href="http://">Ты та...</a>}
        //                             </div>
        //                             <div className="track-play__album">
        //                                 {isLoading ? <Skeleton height={15} baseColor="#313131" / > :<a className="track-play__album-link" href="http://">Баста</a>}
        //                             </div>
        //                         </div>

        //                         <div className="track-play__like-dis">
        //                             <div className="track-play__like _btn-icon">
        //                                 <LikeSvg />
        //                             </div>
        //                             <div className="track-play__dislike _btn-icon">
        //                                 <DislikeSvg />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="bar__volume-block volume">
        //                    <div className="volume__content">
        //                         <div className="volume__image">
        //                             <VolumeSvg />
        //                         </div>
        //                         <div className="volume__progress _btn">
        //                             <input className="volume__progress-line _btn" type="range" name="range" />
        //                         </div>
        //                    </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    )
}

export default Bar