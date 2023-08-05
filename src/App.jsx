import './App.css';
import logo from '/Tic_tac_toe.svg.png';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {

  const onClickHandler = (event) => {
    const elemclicked = event.target;
    elemclicked.innerText = 'X';
  }

  return (
    <div className="App">
      <Header logo={logo}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
