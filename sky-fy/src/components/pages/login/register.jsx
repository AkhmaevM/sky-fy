/* eslint-disable import/no-mutable-exports */
import * as S from './styledForm'
import {ReactComponent as SkyProLogo} from '../../../img/icon/skyproLogo.svg'
import {ReactComponent as SkyProTitle} from '../../../img/icon/skyproGroup.svg'


function authProcess(e){
    const user={
        'login':'',
        'password': '',
        'passwordCheck': '',
    };
    const { target } = e

    
    switch (e.placeholder) {
        case "Логин":
        user.login =target.value;
            break;
        
        case "Пароль":
        user.password = target.value;
        break;
        
        case "Повторите пароль":
            user.passwordCheck =target.value;
        break;
        
        default:
            break;
    }

}

export let token;

export default function Register(){

    return(
        <S.FormWrapper>
            <S.FormMain>
                <S.FormLogo>
                    <SkyProLogo />
                    <SkyProTitle /> 
                </S.FormLogo>
                <S.InputWrapper>
                    <S.InputLogin onInput={authProcess} placeholder='Логин' type='text' />
                    <S.InputPassword onInput={authProcess} placeholder='Пароль' type='password' />
                    <S.InputPassword onInput={authProcess} placeholder='Повторите пароль' type='password' />
                </S.InputWrapper>
               
                <S.ButtonWrapper>
                    <S.ButtonRegister onClick={()=>{token=true}} primary='true' to="/">
                        Зарегистрироваться 
                    </S.ButtonRegister>
                </S.ButtonWrapper>
             
             </S.FormMain>
        </S.FormWrapper>
    )
}
