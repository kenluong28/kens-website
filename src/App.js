import ImgOne from './components/ImgOne'
import ImgTwo from './components/ImgTwo'
import ImgThree from './components/ImgThree'
import ImgFour from './components/ImgFour'
import TxtBoxOne from './components/TxtBoxOne'
import TxtBoxTwo from './components/TxtBoxTwo'
import TxtBoxThree from './components/TxtBoxThree'
import TxtBoxFour from './components/TxtBoxFour'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ImgOne />
        <TxtBoxOne />
        <ImgTwo />
        <TxtBoxTwo />
        <ImgThree />
        <TxtBoxThree />
        <ImgFour />
        <TxtBoxFour />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
