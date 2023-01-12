import './App.css';
import Trackerdos from '../src/components/Trackerdos';
import Desplegable from '../src/components/Desplegable';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hola</h1>
        <Desplegable />
        <Trackerdos />
      </header>
    </div>
  );
};

export default App;
