import React from 'react';
import './App.css';
//import Drawer from './components/moleculas/Mol-drawer';
//import CasesComponent from './components/covid19tracker';
//import TrackerCuatro from './components/tracker-cuatro/Tracker-cuatro';
import TableTracker from './components/moleculas/mol-track-tres-table/Mol-track-tres-table';
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/*<Layout/>
        <Tracker_seis />
        <DataContainer />
        <CasesComponent/>*/}
        <TableTracker/>
      </header>
    </div>
  );    
};      

export default App;
