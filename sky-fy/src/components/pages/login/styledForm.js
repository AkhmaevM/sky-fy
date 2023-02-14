
import { Link } from "react-router-dom";
import styled  from "styled-components";

export const FormWrapper = styled.div`
    baclground-color: #313131;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height: 100vh;
`

export const FormMain = styled.form`
    background: #FFFFFF;
    border-radius: 12px;
    width: 366px;
    height: 439px;
    display:flex;
    flex-direction:column;
    align-items:center;
    jusctify-content:space-evenly;

`

export const FormLogo = styled.div`
    width: 140px;
    height: 21px;
    margin: 43px 0;
`

export const Input = styled.input`
    width: 278.5px;
    border:0;
    border-bottom: 1px solid #D0CECE;
    outline:0;
    &:placeholder{ color: #E1E1E1;}
    `
export const InputWrapper = styled.div`
    margin-bottom: 60px;
    display:flex;
    jusctify-content:center;
    flex-direction:column;
    row-gap: 38px;

`

export const InputLogin = styled(Input)`
`

export const InputPassword = styled(Input)`
`


export const ButtonWrapper = styled(InputWrapper)`
    row-gap:20px;
`

export const StyledLink = styled(Link)`
    color: ${(props)=>(props.black ? "#000000" : "#FFFFFF")} ;
    text-decoration: none;
`

export const ButtonLogin = styled(Link)`
    background: #580EA2;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    color: #FFFFFF;
    text-decoration: none;
    padding-top:12px;
    text-align:center;
    vertical-align:center;

    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;

    &:hover{
        background: #3F007D;
        cursor:pointer;
    };

    &:active{
        background: #271A58;
    }
`


export const ButtonRegister = styled(Link)`
    border: 1px solid #D0CECE;
    background-color:${(props)=>props.primary ? '#580EA2' : '#FFFFFF'};;
    color:${(props)=>props.primary ? '#FFFFFF' : '#000000'}; 
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    padding-top:12px;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    
    color: ${(props)=>(props.black ? "#000000" : "#FFFFFF")} ;
    text-decoration: none;
    text-align:center;
    vertical-align:center;

    &:hover{
        background: #F4F5F6;
        color: #000000;
        cursor:pointer;
    }

    &>a:hover{
        color: #000000;
    }

    &:active{
        background: #D9D9D9;
        color: #000000;
    }
`

