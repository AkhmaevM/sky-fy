/* eslint-disable import/prefer-default-export */
import { useParams } from 'react-router-dom'
import {Container, Main} from '../../../styledApp'
import CenterBlock from '../../centerblock/centerblock'
import Bar from '../../bar/bar'
import Nav from '../../navigation/nav'
import Footer from '../../Footer/Footer'
import { LIST } from '../../../constance'

// eslint-disable-next-line react/function-component-definition
const PlaylistStock = () => {

    const params = useParams();
    const list = LIST.find((item) => item.id === Number(params.id) );
   
    return(
        <Container>
            
        <Main>
            <Nav />
            <CenterBlock 
                title={list.title}
            />
        </Main>
        <Bar />
        <Footer />
        </Container>
    )
}

export default PlaylistStock