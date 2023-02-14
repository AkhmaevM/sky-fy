import {Container, Main} from '../../../styledApp'
import CenterBlock from '../../centerblock/centerblock'
import Bar from '../../bar/bar'
import Nav from '../../navigation/nav'
import Footer from '../../Footer/Footer'

export default function Indy(){

    return(
        <Container>
        <Main>
            <Nav />
            <CenterBlock title='Инди-заряд'/>
        </Main>
        <Bar />
        <Footer />
        </Container>
    )
}