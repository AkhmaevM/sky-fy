/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import * as S from './styledBar'
import track from './Bobby_Marleni_-_Dropin.mp3'

import { useThemeContext } from '../../context/theme'

import {ReactComponent as DislikeSvg} from '../../img/icon/dislike.svg'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NextSvg} from '../../img/icon/next.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
import {ReactComponent as PrevSvg } from '../../img/icon/prev.svg'
import {ReactComponent as PlaySvg} from '../../img/icon/play.svg'
import {ReactComponent as PauseSvg} from '../../img/icon/pause.svg'
import {ReactComponent as RepeatSvg} from '../../img/icon/repeat.svg'
import {ReactComponent as ShuffleSvg} from '../../img/icon/shuffle.svg'
import {ReactComponent as VolumeSvg} from '../../img/icon/volume.svg'

// light theme icons
import {ReactComponent as LightNote} from '../../img/icon/LightNote.svg'
import {ReactComponent as LightDislike} from '../../img/icon/LightDislike.svg'
import {ReactComponent as LightLike} from '../../img/icon/LightLike.svg'
import {ReactComponent as LightNext} from '../../img/icon/LightNext.svg'
import {ReactComponent as LightPrev} from '../../img/icon/LightPrev.svg'
import {ReactComponent as LightPlay} from '../../img/icon/LightPlay.svg'
import {ReactComponent as LightPause} from '../../img/icon/LightPause.svg'
import {ReactComponent as LightRepeat} from '../../img/icon/LightRepeat.svg'
import {ReactComponent as LightShuffle} from '../../img/icon/LightShuffle.svg'
import {ReactComponent as LightVolume} from '../../img/icon/LightVolume.svg'

import IconItem from './icons/iconsComponents'

function Bar() {
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef( new Audio(track))
    const progressRef = useRef()

    const [isLoading, setIsLoading] = useState(true)

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

    const {theme} = useThemeContext()

    
    return (

        <S.Bar>
            
            <S.BarContent >
               
                <S.BarPlayerProgress 
                style={{
                    backgroundColor: theme.progressBar.background
                }}
                type='range' defaultValue='0' max={1000} onChange={progressChange} ref={progressRef} />
                <S.BarPlayerBlock>
                    
                    <S.BarPlayer>
                        <S.PlayerControls>
                                <S.PlayerBtnPrev>
                                    <IconItem defaultIcon={<PrevSvg />} lightIcon={<LightPrev />} />
                                </S.PlayerBtnPrev>
                                
                                {isPlaying ? 
                                    <S.PlayerBtnPause onClick={pause}>
                                      <IconItem defaultIcon={<PauseSvg />} lightIcon={<LightPause />} /> 
                                    </S.PlayerBtnPause> 
                                    :
                                    <S.PlayerBtnPlay  onClick={play}>
                                        <IconItem defaultIcon={<PlaySvg />} lightIcon={<LightPlay />} /> 
                                    </S.PlayerBtnPlay>

                                }
                                
                                <S.PlayerBtnNext>
                                     <IconItem defaultIcon={<NextSvg />} lightIcon={<LightNext />} /> 
                                </S.PlayerBtnNext>

                                <S.PlayerBtnRepeat>
                                    <IconItem defaultIcon={<RepeatSvg />} lightIcon={<LightRepeat />} /> 
                                </S.PlayerBtnRepeat>

                                <S.PlayerBtnShuffle>
                                 <IconItem defaultIcon={<ShuffleSvg />} lightIcon={<LightShuffle />} /> 
                                </S.PlayerBtnShuffle>
                        </S.PlayerControls>
                       
                        <S.PlayerTrackPlay>

                            
                            <S.TrackPlayContain>    
                                <S.TrackPlayImg style={{background: theme.default ? "#313131" : "#B1B1B1"}}>
                                    {isLoading ? <Skeleton  height={51} width={51} baseColor={theme.skeleton.baseColor} /> : <IconItem defaultIcon={<NoteSvg />} lightIcon={<LightNote />} /> }
                                </S.TrackPlayImg>

                                <S.TrackPlayAuthor>
                                {isLoading ? <Skeleton height={15} baseColor={theme.skeleton.baseColor} /> : <S.TrackPlayAuthorLink  style={{color: theme.color }}>Ты та..</S.TrackPlayAuthorLink>}
                                </S.TrackPlayAuthor>

                                <S.TrackPlayAlbum >
                                    {isLoading ? <Skeleton height={15} baseColor={theme.skeleton.baseColor} /> : <S.TrackPlayAlbumLink style={{color: theme.color }}>Баста</S.TrackPlayAlbumLink>}
                                </S.TrackPlayAlbum>
                            </S.TrackPlayContain>

                            <S.TrackPlayLikeDislike>
                                <S.TrackPlayLike>
                                    <IconItem defaultIcon={<LikeSvg />} lightIcon={<LightLike />} />
                                </S.TrackPlayLike>

                                <S.TrackPlayDislike>
                                     <IconItem defaultIcon={<DislikeSvg />} lightIcon={<LightDislike />} />
                                </S.TrackPlayDislike>

                            </S.TrackPlayLikeDislike>
                        </S.PlayerTrackPlay>
                    </S.BarPlayer>
                    
                    <S.Volume>
                        <S.VolumeContent>
                        <S.VolumeImage>
                         <IconItem defaultIcon={<VolumeSvg />} lightIcon={<LightVolume />} />
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