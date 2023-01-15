import React, { memo } from 'react';
import './App.css';
//import Drawer from './components/moleculas/Mol-drawer';
import CasesComponent from './components/covid19tracker';
import TrackerCuatro from './components/tracker-cuatro/Tracker-cuatro';
import TrackerSiete from './components/tacker-siete/Tracker-siete';
import MapChart from './components/tacker-siete/Tracker-siete-bis';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <Drawer/> */}
        <CasesComponent/> 
        <TrackerCuatro />
        <TrackerSiete />
        <MapChart/>
      </header>
    </div>
  );    
};      

export default App;
