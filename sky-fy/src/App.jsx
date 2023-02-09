// import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './styledApp'
import AppRoutes from './components/pages/routes';
import { token } from './components/pages/register';

function App() {
  
  return(
    <S.Wrapper>
      <AppRoutes token={token} />
    </S.Wrapper>
  )
}

export default App;
