import React from 'react';
import './App.css';
// import Layout from './components/Layout';
// import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import Top10 from './components/moleculas/Mol-top10';
// import CasesComponent from './components/covid19tracker';
// import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
// //import Layout from './components/moleculas/Mol-layout';
// import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Layout/>
        <Top10/>
        <PreventLanding/>
        <Desplegable /> */}
        <Trackerdos />
        {/* <CasesComponent/> 
        <TrackerCuatro /> */}
        <covid19tracker/>
      </header>
    </div>
  );    
};      

export default App;
