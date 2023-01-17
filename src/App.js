import React from 'react';
import './App.css';
import LandingMobile from './components/render/landing/landing-mobile/Landing-mobile';
import Layout from './components/render/trackers/tracker-layout/Layout';
//import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
//import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
//import Question from './components/render/landing/landing-view-questions/landing-view-question';
// import Washed from './components/render/landing/landing-view-wash/landing-view-wash';
// import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import CasesComponent from './components/moleculas/Mol-tracker-covid19/covid19tracker'
// import TrackerDiecinueve from './components/render/trackers/tracker-covid19/Tracker-covid-diecinueve';
// import News from './components/render/landing/landing-news/News';
// import Washed from './components/render/landing/landing-view-wash/landing-view-wash';
// import CasesComponent from './components/covid19tracker';
// //import Layout from './components/moleculas/Mol-layout';
// import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';
// import Symptom from './components/render/landing/landing-symptom/Symptom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout/>
        {/* <PreventLanding/> */}
        {/* <Desplegable /> */}
        {/* <TrackerCuatro />
        {/* <Trackerdos /> */}
        {/* <TrackerDiecinueve/> */}
        {/* <Question/>  */} 
        {/* <Washed/>
        <News /> */}
        {/* <Symptom />
        <Trackerdos />
        <Covid19tracker/> */}
        <LandingMobile/>
      </header>
    </div>
  );
}

export default App;
