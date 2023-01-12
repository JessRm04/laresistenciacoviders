import './App.css';
import Trackerdos from '../src/components/Trackerdos';
import Desplegable from '../src/components/Desplegable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Desplegable />
        <Trackerdos />
      </header>
    </div>
  );
};

export default App;
