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
import {PlaylistItem, playList, mockList} from './Playlist'
import * as S from './styledCenterblock'
import { PlaylistTitle } from './ContentTitle'




function CenterBlock(props){

  return (
      <S.CenterBlock>
        <CenterBlockSearch />  

        {(props.filter ? 
        <>
           <S.CenterblockSubtitle>{props.title}</S.CenterblockSubtitle>
           <CenterblockFilters />
        </>
         : <S.CenterblockSubtitle>{props.title}</S.CenterblockSubtitle>)
        }
        
          <CenterblockContent>
          <PlaylistTitle />

            <S.CenterblockPlaylist>
              
            {
              props.main ? playList.map(({title, gray, author, time, album })=>(
                <PlaylistItem
                key={title}
                title={title}
                gray={gray}
                author={author}
                time={time}
                album={album}
                />
              )
              
              ): mockList.map(({title, gray, author, time, album })=>(
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

