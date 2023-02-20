import * as S from '../../../styledApp'
import { NotFoundWrapper, NotFoundTitle } from './styledNotFound'

export default function NotFound(){
    return(
        <S.Wrapper>
            <S.Container>
                <NotFoundWrapper>
                 <NotFoundTitle>Ошибка 404: Страница не найдена</NotFoundTitle>
                </NotFoundWrapper>
            </S.Container>
        </S.Wrapper>
      
    )
}