import troy from './Image20250124134605.jpg';
import devon from './15693.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={troy} className="App-logo" alt="logo" />
        <img src={devon} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://nemo.webqa.epicexplorers.info/adhocwidgets/OpenScheduling/adhocs/JBY2/resources/openSchedulingSimple.aspx"
        >
          Josie's ad hoc stage 1 widget
        </a>
      </header>
    </div>
  );
}

export default App;
