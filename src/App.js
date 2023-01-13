import './App.css';
import DataContainer from './components/DataContainer';
import Drawer from './components/moleculas/Drawer';
import CasesComponent from './components/covid19tracker';
//import TrackerCuatro from './components/Tracker-cuatro';
 import GetData from './services/Get-data';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        <Drawer/>
        <CasesComponent/>
        <TrackerCuatro />
        <GetData />
      </header>
    </div>
  );    
};      

export default App;
