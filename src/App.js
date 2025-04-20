import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Dictionary">

      <header className="App-header mb-4">
     Dictionary
      </header>
      <Dictionary defaultKeyWord="Dog" />
      </div>
    </div>
  );
}

export default App;
