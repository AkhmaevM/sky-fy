/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { useState ,useEffect } from 'react'

// import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
// import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
// import {ReactComponent as SpriteSvg} from '../../img/icon/sprite.svg'
import CenterBlockSearch from './Search'
import CenterblockFilters from './Filter'
import { CenterblockContent, PlaylistTitle } from './styledCenterblock'
import PlaylistItem from './Playlist'
import * as S from './styledCenterblock'


const tracks = {
  'title': ['Guilt', 'Elektro', 'I’m Fire', 'Non Stop', 'Run Run', 'Mucho Bien', 'Knives n Cherries', 'How Deep Is Your Love', ' ' ],

  'author': ['Nero', 'Dynoro, Outwork, Mr. Gee', 'Ali Bakgor', 'Стоункат, Psychopath', 'Jaded, Will Clarke, AR/CO', 'Blue Foundation, Zeds Dead', 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', 'minthaze', 'Calvin Harris, Disciples', 'Tom Boxer',  ' '  ],

  'album': ['Welcome Reality', 'Elektro', 'I’m Fire', 'Non Stop', 'Run Run', 'Eyes on Fire', 'Mucho Bien', 'Captivating', 'How Deep Is Your Love', 'Soundz Made in Romania', ' '],

  'time': ['4:44', '2:22', '2:22', '4:12', '2:54', '5:20', '3:41', '1:48', '3:32', '3:36', ' ']
}

function CenterBlock(){

  function getContent() {
    for (let i = 0; i < 11; i++) {
      <PlaylistItem 
      title={tracks.title[i]} 
      author ={tracks.author[i]} 
      album = {tracks.album[i]}
      time = {tracks.time[i]} />
    }
  }
  
  return (
      <CenterBlock>
        <CenterBlockSearch />  
        <S.CenterblockSubtitle>Треки</S.CenterblockSubtitle>

        <CenterblockFilters />
          <CenterblockContent>
            <PlaylistTitle />

            <S.CenterblockPlaylist>
             {getContent}
            </S.CenterblockPlaylist>

            </CenterblockContent>
      </CenterBlock>
  )
          
            /* <div className="content__playlist playlist">
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Guilt <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Nero
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Welcome Reality
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">4:44</span>
                  </div>
                </div>
              </div>

              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Elektro <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Dynoro, Outwork, Mr. Gee
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Elektro
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>

              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <SpriteSvg className="track__title-svg"  />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        I’m Fire <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Ali Bakgor
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      I’m Fire
                    </a>
                  </div>
                  <div className="track__time">
                  <SpriteSvg className="track__time-svg"  />
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Non Stop <span className="track__title-span">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Стоункат, Psychopath
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Non Stop
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Run Run <span className="track__title-span">(feat. AR/CO)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Jaded, Will Clarke, AR/CO
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Run Run
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">2:54</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Eyes on Fire{" "}
                        <span className="track__title-span">(Zeds Dead Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Blue Foundation, Zeds Dead
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Eyes on Fire
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">5:20</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Mucho Bien
                        <span className="track__title-span">(Hi Profile Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      HYBIT, Mr. Black, Offer Nissim, Hi Profile
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Mucho Bien
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">3:41</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Knives n Cherries <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      minthaze
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Captivating
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">1:48</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        How Deep Is Your Love <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Calvin Harris, Disciples
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      How Deep Is Your Love
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">3:32</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        Morena <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      Tom Boxer
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      Soundz Made in Romania
                    </a>
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text">3:36</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <NoteSvg className="track__title-svg" />
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        {" "}
                        <span className="track__title-span" />
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://" /> <span className="track__title-span" />
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://" />
                  </div>
                  <div className="track__time">
                    <LikeSvg className="track__time-svg" / >
                    <span className="track__time-text" />
                  </div>
                </div>
              </div>
            </div> */

          
         
        
      
  
}

export default CenterBlock

