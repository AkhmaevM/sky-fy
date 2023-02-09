import {Container, Main} from '../../styledApp'
import CenterBlock from '../centerblock/centerblock'
import Bar from '../bar/bar'
import Footer from '../Footer/Footer'

export default function Daily(){

    return(
        <Container>
        <Main>
            <CenterBlock title='Плейлист дня' />
        </Main>
        <Bar />
        <Footer />
    </Container>
    )
   


}