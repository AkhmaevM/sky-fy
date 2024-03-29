import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import * as S from './styledCenterblock'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
import { useThemeContext } from '../../context/theme';
import { ReactComponent as LightNote } from '../../img/icon/LightNote.svg';
import IconItem from '../bar/icons/iconsComponents';

export const playList = [
    {
      title :'Guilt', 
      author :'Nero',
      album :'Welcome Reality',
      time :'4:44'
    },

    {
      title:'Elektro' ,
      author :'Dynoro, Outwork, Mr. Gee',
      album : 'Elektro',
      time : '2:22'
    },

    {
      title:'I’m Fire', 
      author :'Ali Bakgor',
      album : 'I’m Fire',
      time : '2:22'
    },

    {
      title:'Non Stop', 
      gray: ' (Remix)',
      author :'Стоункат, Psychopath',
      album : 'Non Stop',
      time : '4:12'
    },

    {
      title:'Run Run' ,
      gray : ' (feat. AR/CO)',
      author :'Jaded, Will Clarke, AR/COh',
      album : 'Run Run',
      time : '2:54'
    },

    {
      title:'Eyes on Fire',
      gray : ' (Zeds Dead Remix)', 
      author :'Blue Foundation, Zeds Dead',
      album : 'Eyes on Fire',
      time : '5:20'
    },

    {
      title:'Mucho Bien',
      gray : ' (Hi Profile Remix)', 
      author :'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      album : 'Mucho Bien',
      time : '3:41'
    },

    {
      title:'Knives n Cherries', 
      author :'minthaze',
      album : 'Captivating',
      time : '1:48'
    },

    {
      title:'How Deep Is Your Love', 
      author :'Calvin Harris, Disciples',
      album : 'How Deep Is Your Love',
      time : '3:32'
    },

    {
      title:'Morena', 
      author :'Tom Boxer',
      album : 'Soundz Made in Romania',
      time : '3:36'
    },

    {
      title:' ', 
      author :' ',
      album : ' ',
      time : ' '
    }
  ]

export const mockList = [
  {
    title :'Guilt', 
    author :'Nero',
    album :'Welcome Reality',
    time :'4:44'
  },
  
  {
    title:'Elektro' ,
    author :'Dynoro, Outwork, Mr. Gee',
    album : 'Elektro',
    time : '2:22'
  },

  {
    title:'I’m Fire', 
    author :'Ali Bakgor',
    album : 'I’m Fire',
    time : '2:22'
  },

  {
    title:'Non Stop', 
    gray: ' (Remix)',
    author :'Стоункат, Psychopath',
    album : 'Non Stop',
    time : '4:12'
  },

  {
    title:'Run Run' ,
    gray : ' (feat. AR/CO)',
    author :'Jaded, Will Clarke, AR/COh',
    album : 'Run Run',
    time : '2:54'
  },
]

export function PlaylistItem(props) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)    
        }, 3000);

    })

    const {theme} = useThemeContext()

    return(
    <S.PlaylistItem>
      
      <S.PlaylistTrack>
              
            <S.TrackTitle>
                <S.TrackTitleImage style={{background: theme.default ? "#313131" : "#B1B1B1"}} >
                   {isLoading ? <Skeleton height={51} width={51} baseColor={theme.skeleton.baseColor} /> : <IconItem defaultIcon={<NoteSvg />} lightIcon={<LightNote />} />}
                </S.TrackTitleImage>
                
                <S.TrackTitleText>
                    {isLoading ? <Skeleton width={356} height={19} baseColor={theme.skeleton.baseColor} /> : <S.TrackTitleLink>
                        {props.title}
                        <S.TrackTitleSpan>{props.gray}</S.TrackTitleSpan>
                    </S.TrackTitleLink>}
                </S.TrackTitleText>
            </S.TrackTitle>
            
            {isLoading ? <Skeleton height={19} baseColor={theme.skeleton.baseColor} width={271} /> :
            <S.TrackAuthor>
                    <S.TrackAuthorLink>
                        {props.author}
                    </S.TrackAuthorLink>
            </S.TrackAuthor>}
            
        
            {isLoading ? <Skeleton baseColor={theme.skeleton.baseColor}  height={19} width={271} /> : 
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