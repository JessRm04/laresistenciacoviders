import './App.css';
import Drawer from './components/moleculas/Mol-drawer';
import CasesComponent from './components/covid19tracker';
import TrackerCuatro from './components/tracker-cuatro/Tracker-cuatro';
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        <Drawer/>
        <CasesComponent/>
        <TrackerCuatro />
      </header>
    </div>
  );    
};      

export default App;
