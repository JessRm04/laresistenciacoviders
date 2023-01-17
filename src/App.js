import React from 'react';
import './App.css';
import Layout from './components/Layout';
// import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import Top10 from './components/moleculas/Mol-top10';
// import CasesComponent from './components/moleculas/Mol-tracker-covid19/covid19tracker'
import Tracker19 from './components/render/trackers/tracker-covid19/Tracker-covid19';
// import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';
// import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
// import Layout from './components/moleculas/Mol-layout';
// import CasesComponent from './components/covid19tracker';
// import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
// //import Layout from './components/moleculas/Mol-layout';
// // import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
// import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout/>
        {/* <PreventLanding/> */}
        {/* <Desplegable /> */}
        {/* <TrackerCuatro />
        {/* <Trackerdos /> */}
        <Tracker19/>
      </header>
    </div>
  );    
};      

export default App;
