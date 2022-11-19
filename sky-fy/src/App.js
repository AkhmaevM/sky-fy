import './App.css';
import Nav from './lib/nav';
import CenterBlock from './lib/centerblock';
import Sidebar from './lib/sidebar';
import Bar from './lib/bar';

function App() {
  return (
    <div className="wrapper">
     <div className='container'>
     <main className='main__nav nav'>
          <Nav />
          <CenterBlock />
          <Sidebar />
      </main>
      <Bar />
      <footer className="footer" />
     </div>
    </div>
  );
}



export default App;
