import Nav from './navigation/nav';
import CenterBlock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';
import Bar from './bar/bar';
import Footer from './Footer/Footer';
import * as S from '../styledApp'

export default function Content(){

    return(
        <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock title='Треки' filter='true' main='true' />
                <Sidebar />
              </S.Main>
              <Bar />
              <Footer />
            </S.Container>
    )
}