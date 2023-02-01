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
import {PlaylistItem, playList} from './Playlist'
import * as S from './styledCenterblock'
import {ReactComponent as WatchSvg} from '../../img/icon/watch.svg'


  

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
              
            {
              playList.map(({title, gray, author, time, album })=>(
                <PlaylistItem
                key={title}
                title={title}
                gray={gray}
                author={author}
                time={time}
                album={album}
                />
              )
              
              )
            }

            </S.CenterblockPlaylist>

            </CenterblockContent>
      </S.CenterBlock>
  )
          
}

export default CenterBlock

