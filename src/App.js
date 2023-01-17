import React from 'react';
import './App.css';
import Layout from './components/render/trackers/tracker-layout/Layout';
//import Trackerdos from './components/render/trackers/tracker-dos/Mol-trackerdos';
//import Desplegable from './components/render/trackers/tracker-dos/Mol-trackerdos-desplegable';
//import TrackerCuatro from './components/render/trackers/tracker-cuatro/Tracker-cuatro';
//import Question from './components/render/landing/landing-view-questions/landing-view-question';
// import Washed from './components/render/landing/landing-view-wash/landing-view-wash';
// import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import Top10 from './components/moleculas/Mol-top10';
// import CasesComponent from './components/moleculas/Mol-tracker-covid19/covid19tracker'
import TrackerDiecinueve from './components/render/trackers/tracker-covid19/Tracker-covid-diecinueve';
// import News from './components/render/landing/landing-news/News';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>COVIDERS</h1>
        <Drawer/> 
        <Desplegable />
        <Trackerdos />
        {/*<CasesComponent />
        <TrackerCuatro />
        <Question/>*/}
        <Washed/>
        <News />

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
