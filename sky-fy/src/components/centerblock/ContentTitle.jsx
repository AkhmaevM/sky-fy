/* eslint-disable import/prefer-default-export */
import {ReactComponent as WatchSvg} from '../../img/icon/watch.svg'
import * as S from './styledCenterblock'


export function PlaylistTitle() {

        <S.PlaylistTitle>

                <S.Col1>Трек</S.Col1>
                <S.Col2>ИСПОЛНИТЕЛЬ</S.Col2>
                <S.Col3>АЛЬБОМ</S.Col3>
                <S.Col4>
                    <WatchSvg />
                </S.Col4>
            
        </S.PlaylistTitle>

        // <div className="content__title playlist-title">
        //       <div className="playlist-title__col col01">Трек</div>
        //       <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        //       <div className="playlist-title__col col03">АЛЬБОМ</div>
        //       <div className="playlist-title__col col04">
        //         <WatchSvg />
        //       </div>
        // </div>
}