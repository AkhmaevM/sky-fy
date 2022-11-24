import './App.css'
import Nav from './components/navigation/nav';
import CenterBlock from './components/centerblock/centerblock';
import Sidebar from './components/sidebar/sidebar';
import Bar from './components/bar/bar';

function App() {
  return (
    <div className="wrapper">
     <div className='container'>
     <main className='main'>
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
