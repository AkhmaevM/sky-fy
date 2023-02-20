import {Container, Main} from '../../../styledApp'
import CenterBlock from '../../centerblock/centerblock'
import Bar from '../../bar/bar'
import Nav from '../../navigation/nav'
import Footer from '../../Footer/Footer'

export default function MyTracks(){

    return(
        <Container>
        <Main>
            <Nav />
            <CenterBlock title='Мои треки'/>
        </Main>
        <Bar />
        <Footer />
        </Container>
    )
}