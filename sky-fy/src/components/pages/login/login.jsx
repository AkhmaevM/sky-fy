// import { useState } from 'react';
import * as S from './styledForm'
import {ReactComponent as SkyProLogo} from '../../../img/icon/skyproLogo.svg'
import {ReactComponent as SkyProTitle} from '../../../img/icon/skyproGroup.svg'
import { token } from './register'

 export default function Login(){
    

    return(
        <S.FormWrapper>
            <S.FormMain>
                <S.FormLogo>
                    <SkyProLogo />
                    <SkyProTitle /> 
                </S.FormLogo>
                <S.InputWrapper>
                    <S.InputLogin placeholder='Логин' type='text' />
                    <S.InputPassword placeholder='Пароль' type='password'/>
                </S.InputWrapper>

                <S.ButtonWrapper>
                    <S.ButtonLogin to={token ? '/main' : '/'}  > 
                            Войти
                     </S.ButtonLogin>
                    <S.ButtonRegister to='/register' black='true'> 
                             Зарегистрироваться
                    </S.ButtonRegister>
                </S.ButtonWrapper>
             
             </S.FormMain>
        </S.FormWrapper>
    )
}

