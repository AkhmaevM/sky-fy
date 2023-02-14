import {Container, Main} from '../../../styledApp'
import CenterBlock from '../../centerblock/centerblock'
import Bar from '../../bar/bar'
import Nav from '../../navigation/nav'
import Footer from '../../Footer/Footer'

export default function DanceHits(){

    return(
        <Container>
        <Main>
            <Nav />
            <CenterBlock title='100 танцевальных хитов'/>
        </Main>
        <Bar />
        <Footer />
        </Container>
    )
}