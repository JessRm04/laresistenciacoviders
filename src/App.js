import React from 'react';
import './App.css';
import TrackerDos from './components/render/trackers/tracker-dos/Mol-tracker-dos-country';

//import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';
//import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
//import Layout from './components/moleculas/Mol-layout';
//import CasesComponent from './components/covid19tracker';
//import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
//import Question from './components/render/landing/landing-view-questions/landing-view-question';
//import Washed from './components/render/landing/landing-view-wash/landing-view-wash';

// import Layout from './components/Layout';
// import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import Top10 from './components/moleculas/Mol-top10';
// import CasesComponent from './components/covid19tracker';
// import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
// //import Layout from './components/moleculas/Mol-layout';
// import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>COVIDERS</h1>
        <Drawer/> 
        <Desplegable />
        <Trackerdos />
        <CasesComponent/> 
        <TrackerCuatro />
        <Question/>*/}
        {/* <Washed/> */}

        {/* <Layout/>
        <Top10/>
        <PreventLanding/>
        <Desplegable /> */}
        <TrackerDos />
        {/* <CasesComponent/> 
        <TrackerCuatro /> */}
        <covid19tracker/>

      </header>
    </div>
  );    
};      

export default App;
