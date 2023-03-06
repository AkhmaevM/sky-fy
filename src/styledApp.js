import styled, {createGlobalStyle} from "styled-components";
    
export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'StratosSkyeng', sans-serif;
    },

    *:before,
    *:after {
        box-sizing: border-box;
    },

    
    @font-face {
        font-family: 'StratosSkyeng';
        src: local('StratosSkyeng'), local('StratosSkyeng'),
            url('public/fonts/stratosskyengweb-regular.woff2) format('woff2'),
            url('public/fonts/StratosSkyengweb.woff') format('woff');
            
        font-weight: 400;
        font-style: normal;
    },
    
    a, ul{
        list-style-type: none;
        color: #FFFFFF;
    },
    
    

    a:hover{
        cursor: pointer;
    }

` 

export const Body = styled.body`
    width: 100%;
    height: 100%;
    color: #FFF;
    background-color: #181818;
`

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
   
`

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    
`

export const Main = styled.main`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap:50px;
`

export const Footer = styled.footer`
`

export const HidenId = styled.p`
    display:none;
`