import styled from 'styled-components'

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
` 

export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const BarPlayerProgress = styled.progress`
    width: 100%;
    height: 5px;
    background: #2E2E2E;

    &::-webkit-progress-value{
        background: #AD61FF;
    }

    
`

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const Player = styled.div``

export const PlayerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`

export const PlayerBtn = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const PlayerBtnPrev = styled(PlayerBtn)`
    margin-right: 23px;
`

export const PlayerBtnPlay = styled(PlayerBtnPrev)`   
`
export const PlayerBtnPause = styled(PlayerBtnPrev)`
`

export const PlayerBtnNext = styled(PlayerBtn)`
    margin-right: 28px;
    fill: #a53939;
`

export const PlayerBtnRepeat = styled(PlayerBtn)`
    margin-right: 24px;
`

export const PlayerBtnShuffle = styled(PlayerBtn)`
    display: flex;
    align-items: center;
`
export const PlayerTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author''image album';
    align-items: center;
`

export const TrackPlayImg = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
    cursor:pointer;
`
export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
    cursor:pointer;
`

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
    
`

export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
`

export const TrackPlayLikeDislike = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`

export const TrackPlayLike = styled.div`
    padding: 5px;
    cursor:pointer;
`

export const TrackPlayDislike = styled(TrackPlayLike)`
    margin-left: 28.5px;
    cursor:pointer;
`

export const Volume = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    cursor:pointer;
`

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
    cursor:pointer;
`
export const VolumeProgress = styled.div`
    width: 106px;
    cursor: pointer;
    
`

export const VolumeProgressLine = styled.input`
    border: 2px solid #797979;
    width: 106px;
    height: 1px;
    cursor:pointer;
`