import React from 'react';
import './App.css';
import Mapa from './components/render/trackers/tacker-siete/Tracker-siete-class';
//import Drawer from './components/moleculas/Mol-drawer';
//import CasesComponent from './components/covid19tracker';
//import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
 import TrackerSiete from './components/render/trackers/tacker-siete/Tracker-siete-map'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <Drawer/> */}
        {/* <CasesComponent/>  */}
        {/* <TrackerCuatro /> */}
        <TrackerSiete/>
        <Mapa/>
      </header>
    </div>
  );    
};      

export default App;
