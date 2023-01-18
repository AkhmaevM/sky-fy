/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import {  useState } from 'react';
import {DropDownList, DropwDownYear} from '../filters';
import {ReactComponent as WatchSvg} from '../../img/icon/watch.svg'
import {ReactComponent as LikeSvg} from '../../img/icon/like.svg'
import {ReactComponent as NoteSvg} from '../../img/icon/note.svg'
import {ReactComponent as SpriteSvg} from '../../img/icon/sprite.svg'
import {ReactComponent as SearchSvg} from '../../img/icon/search.svg'


const performers = 
[
  'Michael Jakson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys'
]

const genres = [
  'Рок',
  'Хип-хоп',
  'Поп-музыка',
  'Техно',
  'Инди'
]

function CenterBlock(){
  
  const [visiblePerformers, setVisiblePerformers] = useState(false);
  const [visibleYear, setVisibleYear] = useState(false);
  const [visibleGenres, setVisibleGenres] = useState(false);
  
  const toggleActive = (e)=>{
    switch (e.target.classList.contains('active')) {
      case true:
        e.target.classList.remove('active')
        break;
    
      case false:
        e.target.classList.add('active')
        break;
      
      default:
        break;
    }
    
  }

  const toggleVisibilityPerformers = (e)=>{
    setVisiblePerformers(!visiblePerformers)

    if (visibleGenres) {
      setVisibleGenres(!visibleGenres)
      
    }
    if (visibleYear) {
      setVisibleYear(!visibleYear)
    }
  
    toggleActive(e)

  };
  
  const toggleVisibilityGenres = (e)=>{
    setVisibleGenres(!visibleGenres)
    if (visiblePerformers) {
      setVisiblePerformers(!visiblePerformers)
      
    }
    if (visibleYear) {
      setVisibleYear(!visibleYear)
    }
    toggleActive(e)
  };

  const toggleVisibilityYear = (e)=>{
    setVisibleYear(!visibleYear)
    
    if (visibleGenres) {
      setVisibleGenres(!visibleGenres)
      
    }
    if (visiblePerformers) {
      setVisiblePerformers(!visiblePerformers)
      
    }
    toggleActive(e)
  };



    return (

      <div className="main__centerblock centerblock">
          <div className="centerblock__search search">
            <SearchSvg className="search__svg"/>
            <input
              className="search__text"
              type="search"
              placeholder="Поиск"
              name="search" />
          </div>
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <a className='filter__button button-author _btn-text' onClick={toggleVisibilityPerformers}>исполнителю
              {visiblePerformers && (
                <DropDownList item={performers} />
              )}
            </a>

            <div className="filter__button button-year _btn-text" onClick={toggleVisibilityYear}>году выпуска
              {visibleYear && (
                <DropwDownYear />
              )}
            </div>
            <div className="filter__button button-genre _btn-text" onClick={toggleVisibilityGenres}>жанру
              {visibleGenres && (
                <DropDownList item={genres} />
              )}
            </div>
          </div>

          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <div className="playlist-title__col col01">Трек</div>
              <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
              <div className="playlist-title__col col03">АЛЬБОМ</div>
              <div className="playlist-title__col col04">
                <WatchSvg />
              </div>
            </div>
            <div className="content__playlist playlist">
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
                        Mucho Bien{" "}
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
            </div>
          </div>
        </div>
      
    )
}

export default CenterBlock

