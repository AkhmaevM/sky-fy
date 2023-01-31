/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import CenterBlockSearch from './Search'
import CenterblockFilters from './Filter'
import { CenterblockContent } from './styledCenterblock'
import PlaylistItem from './Playlist'
import * as S from './styledCenterblock'
import {ReactComponent as WatchSvg} from '../../img/icon/watch.svg'

  // const title = ['Guilt', 'Elektro', 'I’m Fire', 'Non Stop', 'Run Run', 'Mucho Bien', 'Knives n Cherries', 'How Deep Is Your Love', ' ' ];
  // const author = ['Nero', 'Dynoro, Outwork, Mr. Gee', 'Ali Bakgor', 'Стоункат, Psychopath', 'Jaded, Will Clarke, AR/CO', 'Blue Foundation, Zeds Dead', 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', 'minthaze', 'Calvin Harris, Disciples', 'Tom Boxer',  ' '  ];
  // const album = ['Welcome Reality', 'Elektro', 'I’m Fire', 'Non Stop', 'Run Run', 'Eyes on Fire', 'Mucho Bien', 'Captivating', 'How Deep Is Your Love', 'Soundz Made in Romania', ' '];
  // const time = ['4:44', '2:22', '2:22', '4:12', '2:54', '5:20', '3:41', '1:48', '3:32', '3:36', ' '];

function CenterBlock(){

  return (
      <S.CenterBlock>
        <CenterBlockSearch />  
        <S.CenterblockSubtitle>Треки</S.CenterblockSubtitle>

        <CenterblockFilters />
          <CenterblockContent>
          <S.PlaylistTitle>
            
            <S.Col1>Трек</S.Col1>
            <S.Col2>ИСПОЛНИТЕЛЬ</S.Col2>
            <S.Col3>АЛЬБОМ</S.Col3>
            <S.Col4>
                <WatchSvg />
            </S.Col4>
        
      </S.PlaylistTitle>

            <S.CenterblockPlaylist>

            <PlaylistItem 
              title='Guilt' 
              author ='Nero'
              album = 'Welcome Reality'
              time = '4:44'
            />

            <PlaylistItem 
              title='Elektro' 
              author ='Dynoro, Outwork, Mr. Gee'
              album = 'Elektro'
              time = '2:22'
            />

            <PlaylistItem 
              title='I’m Fire' 
              author ='Ali Bakgor'
              album = 'I’m Fire'
              time = '2:22'
            />

            <PlaylistItem 
              title='Non Stop' 
              gray= ' (Remix)'
              author ='Стоункат, Psychopath'
              album = 'Non Stop'
              time = '4:12'
            />

            <PlaylistItem 
              title='Run Run' 
              gray = ' (feat. AR/CO)'
              author ='Jaded, Will Clarke, AR/COh'
              album = 'Run Run'
              time = '2:54'
            />

            <PlaylistItem 
              title='Eyes on Fire'
              gray = ' (Zeds Dead Remix)' 
              author ='Blue Foundation, Zeds Dead'
              album = 'Eyes on Fire'
              time = '5:20'
            />  

            <PlaylistItem 
              title='Mucho Bien'
              gray = ' (Hi Profile Remix)' 
              author ='HYBIT, Mr. Black, Offer Nissim, Hi Profile'
              album = 'Mucho Bien'
              time = '3:41'
            /> 

            <PlaylistItem 
              title='Knives n Cherries' 
              author ='minthaze'
              album = 'Captivating'
              time = '1:48'
            />

            <PlaylistItem 
              title='How Deep Is Your Love' 
              author ='Calvin Harris, Disciples'
              album = 'How Deep Is Your Love'
              time = '3:32'
            />

            <PlaylistItem 
              title='Morena' 
              author ='Tom Boxer'
              album = 'Soundz Made in Romania'
              time = '3:36'
            />

            <PlaylistItem 
              title=' ' 
              author =' '
              album = ' '
              time = ' '
            />


            </S.CenterblockPlaylist>

            </CenterblockContent>
      </S.CenterBlock>
  )
          
}

export default CenterBlock

