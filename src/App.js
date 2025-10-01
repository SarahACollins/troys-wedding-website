import troy from './Image20250124134605.jpg';
import devon from './15693.jpg';
import './App.css';

function App() {
 const handleRedirect = () => {
    window.top.location.href =
      'https://nemo.webqa.epicexplorers.info/adhocwidgets/OpenScheduling/adhocs/scollins_postlogin/resources/openSchedulingSimple.aspx';
  };

  // without top redirect
  return (
    <div className="App">
      <header className="App-header">
        <div>Congrats Troy and Devon</div>
        <img src={troy} className="App-logo" alt="logo" />
        <img src={devon} className="App-logo" alt="logo" />
        <button className="App-link" onClick={handleRedirect}>
          Josie's ad hoc stage 1 widget web link
        </button>
        <a className="App-link" href="https://nemo.webqa.epicexplorers.info/adhocwidgets/OpenScheduling/adhocs/scollins_postlogin/resources/openSchedulingSimple.aspx">
          Josie's ad hoc stage 1 widget mobile link
        </a>
      </header>
    </div>
  );
}

export default App;
