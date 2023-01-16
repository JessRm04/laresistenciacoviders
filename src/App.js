import './App.css';
import Trackerdos from './components/trackerdos/moleculas/Mol-trackerdos';
import Desplegable from './components/trackerdos/moleculas/Mol-trackerdos-desplegable';



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
