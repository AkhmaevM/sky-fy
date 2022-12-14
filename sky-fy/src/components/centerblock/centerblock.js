/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import {DropDownList, DropwDownYear} from '../filters';
import watchSvg from '../../img/icon/watch.svg'
import likeSvg from '../../img/icon/like.svg'
import noteSvg from '../../img/icon/note.svg'
import spriteSvg from '../../img/icon/sprite.svg'
import searchSvg from '../../img/icon/search.svg'

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
 
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  
    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref={searchSvg} />
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div className="filter__button button-author _btn-text" onClick={toggleVisibility}>исполнителю
          {visible && (
            <DropDownList item = {performers}/>
            )}  </div>
          
          <div className="filter__button button-year _btn-text" onClick={toggleVisibility}>году выпуска
          {visible && (
            <DropwDownYear/>
            )} 
          </div>
          <div className="filter__button button-genre _btn-text" onClick={toggleVisibility}>жанру
          {visible && (
            <DropDownList item = {genres}/>
            )}
          </div>
        </div>
        
        <div className="centerblock__content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg" alt="time">
                <use xlinkHref={watchSvg} />
              </svg>
            </div>
          </div>
          <div className="content__playlist playlist">
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">4:44</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={spriteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={spriteSvg} />
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">4:12</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>  
                  <span className="track__time-text">2:54</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">5:20</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">3:41</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">3:32</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
                  <span className="track__time-text">3:36</span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref={noteSvg} />
                    </svg>
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
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref={likeSvg} />
                  </svg>
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