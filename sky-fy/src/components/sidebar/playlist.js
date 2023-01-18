/* eslint-disable jsx-a11y/anchor-is-valid */
import playList1 from '../../img/playlist01.png'
import playList2 from '../../img/playlist02.png'
import playList3 from '../../img/playlist03.png'

 export function Playlist01(){
    return(
          <img className="sidebar__img" src={playList1} alt="day's playlist" />
    )
}

 export function Playlist02(){
    return(
      <img className="sidebar__img" src={playList2} alt="day's playlist" />
    )
}

export  function Playlist03(){
    return(
      <img className="sidebar__img" src={playList3} alt="day's playlist" />
    )
}