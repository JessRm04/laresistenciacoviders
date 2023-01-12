import './App.css';
import DataContainer from './components/DataContainer';
import Drawer from './components/moleculas/Drawer';
//import {Tracker_seis, data, options} from './components/Tracker_seis';
import CasesComponent from './components/covid19tracker';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        <Drawer/>
        
        <DataContainer />
        <CasesComponent/>
      </header>
    </div>
  );    
};      

export default App;
