/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {ReactComponent as DislikeSvg} from '../../img/icon/dislike.svg'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NextSvg} from '../../img/icon/next.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
import {ReactComponent as PrevSvg } from '../../img/icon/prev.svg'
import {ReactComponent as PlaySvg} from '../../img/icon/play.svg'
import PauseSvg from '../../img/icon/pause.svg'
import {ReactComponent as RepeatSvg} from '../../img/icon/repeat.svg'
import {ReactComponent as ShuffleSvg} from '../../img/icon/shuffle.svg'
import {ReactComponent as VolumeSvg} from '../../img/icon/volume.svg'
import * as S from './styledBar'
import track from './Bobby_Marleni_-_Dropin.mp3'

function Bar() {
    const [isLoading, setIsLoading] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef( new Audio(track))
    const progressRef = useRef()

    useEffect(()=>{
        setTimeout(() => {
           setIsLoading(false) 
        }, 3000);
    })

    useEffect(()=>{
        audioRef.current.ontimeupdate = () =>{
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 1000
            progressRef.current.value = progress 
        }
    }, [audioRef, progressRef])
    
    const progressChange = () =>{
        audioRef.current.currentTime = progressRef.current.value / 1000 * audioRef.current.duration
    }

    const play = ()=>{
        audioRef.current.play()
        setIsPlaying(true);
    }


    const pause = ()=>{
        audioRef.current.pause()
        setIsPlaying(false)
      
    }

    
    return (

        <S.Bar>
            
            <S.BarContent>
               
                <S.BarPlayerProgress type='range' defaultValue='0' max={1000} onChange={progressChange} ref={progressRef} />
                <S.BarPlayerBlock>
                    
                    <S.BarPlayer>
                        <S.PlayerControls>
                                <S.PlayerBtnPrev>
                                    <PrevSvg />
                                </S.PlayerBtnPrev>
                                
                                {isPlaying ? 
                                    <S.PlayerBtnPause onClick={pause}>
                                       <img src={PauseSvg} alt="Pause" 
                                        style={{height:25, width: 25}}
                                       />
                                    </S.PlayerBtnPause> 
                                    :
                                    <S.PlayerBtnPlay  onClick={play}>
                                        <PlaySvg />
                                    </S.PlayerBtnPlay>

                                }
                                
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