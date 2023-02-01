import styled from "styled-components";

export const CenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
    color: #FFF;
`

export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const CenterblockSubtitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`

export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    &::placeholder {
        background-color: transparent;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

`

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const FilterButton = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    padding: 6px 20px;
    list-style-type:none;
    color: ${(props)=>props.active ? "#B672FF" : "#FFFFF"};
    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover{
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor:pointer;
    }

    &:checked {
        border-color: #AD61FF;
        color: #AD61FF;
        cursor: pointer;
    }

    &:active{
        color: #B672FF;
    }

`

export const FilterList = styled.div`
    border-radius: 12px;
    width: 248px;
    position: absolute;
    background: #313131;
`
export const FilterListNav = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 10px;

    &:hover{
        cursor:pointer;
    }
`

export const FilterListItem = styled.li`
    text-decoration: none;
    width: 119px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: ${(props) => (props.active ? "#B672FF" : "#FFFFFF" )};
    
    list-style-type:none;

    &:active{
        color: #B672FF;
    }

    &:hover{
        text-decoration-line: underline;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #B672FF;
        cursor:pointer;
    }
`
export const FilterYear = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 34px;
    // column-gap: 28px;
    width: 405px;
    height: 92px;
    background: #313131;
    border-radius: 12px;
    justify-content: center;

    &:hover{
        cursor:pointer;
    }
`
export const FilterYearRadio = styled.input`
    width: 18px;
    height: 18px;

    &:hover{
        cursor:pointer;
    }
`

export const FilterYearValue = styled.label`
    width: 149px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    text-align:center;

    &:hover{
        cursor:pointer;
    }
`

export const PlaylistTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`
export const PlaylistTitleCol = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`

export const Col1 = styled(PlaylistTitleCol)`
    width: 447px;
    
`

export const Col2 = styled(PlaylistTitleCol)`
    width: 321px;
`

export const Col3 = styled(PlaylistTitleCol)`
    width: 245px;
`

export const Col4 = styled(PlaylistTitleCol)`
    width: 60px;
    text-align: end;
`

export const CenterblockContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CenterblockPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`

export const PlaylistTrack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TrackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`
export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`
export const TrackTitleSVG = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`

export const TrackTitleText = styled.div`
    
`
export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFF;
    cursor:pointer;
`
export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
`
export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
    cursor:pointer;
`
export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left;
    cursor:pointer;
`

export const TrackAlbum = styled.div`
    width: 245px;
    
`

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
    cursor:pointer;
`

export const TrackTime = styled.div`
`

export const TrackTimeSVG = styled.svg`
    width: 14px;
    height: 12px;
   
    fill: transparent;
    stroke: #696969;
`

export const TrackTimeText = styled.span`
    margin-left:17px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`