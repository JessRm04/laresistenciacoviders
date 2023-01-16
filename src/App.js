import React from 'react';
import './App.css';
//import Drawer from './components/moleculas/Mol-drawer';
//import CasesComponent from './components/covid19tracker';
//import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
 import TrackerSiete from ''; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <Drawer/> */}
        {/* <CasesComponent/>  */}
        {/* <TrackerCuatro /> */}
        <TrackerSiete/>
      </header>
    </div>
  );    
};      

export default App;
