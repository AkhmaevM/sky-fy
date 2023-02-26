import Nav from './navigation/nav';
import CenterBlock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';
import Bar from './bar/bar';
import Footer from './Footer/Footer';
import * as S from '../styledApp'
import {LIST} from '../constance'



export default function Content(){
  // const {theme} = useThemeContext()

    return(
        <S.Container
          // style={{
          //   backgroundColor: theme.background,
          //   color: theme.color,
          // }
          // }
        >
              <S.Main>
                <Nav list={LIST} />
                <CenterBlock title='Треки' filter='true' main='true' />
                <Sidebar list={LIST} />
              </S.Main>
              <Bar />
              <Footer />
            </S.Container>
    )
}