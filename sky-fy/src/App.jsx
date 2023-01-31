
import 'react-loading-skeleton/dist/skeleton.css'
import Nav from './components/navigation/nav';
import CenterBlock from './components/centerblock/centerblock';
import Sidebar from './components/sidebar/sidebar';
import Bar from './components/bar/bar';
import Footer from './components/Footer/Footer';
import * as S from './styledApp'

function App() {

  return(
      <>
        <S.GlobalStyles />
        <S.Wrapper>
            <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock />
                <Sidebar />
              </S.Main>
              <Bar />
              <Footer />
            </S.Container>
          </S.Wrapper>
      </>
         
  )
  //   <div className="wrapper">
  //    <div className='container'>
  //    <main className='main'>
  //         <Nav />
  //         <CenterBlock />
  //         <Sidebar  />
  //     </main>
  //     <Bar />
  //     <footer className="footer" />
  //    </div>
  //   </div>
  // )
}

export default App;
