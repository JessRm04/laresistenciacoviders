import React from "react";
import "./App.css";
import Layout from "./components/render/trackers/tracker-layout/Layout";
// import TrackerCuatro from "./components/render/trackers/tracker-cuatro/Tracker-cuatro";
// import Trackerdos from "./components/render/trackers/tracker-dos/Mol-trackerdos";
// import Desplegable from "./components/render/trackers/tracker-dos/Mol-trackerdos-desplegable";
// import Question from "./components/render/landing/landing-view-questions/landing-view-question";
// import Washed from "./components/render/landing/landing-view-wash/landing-view-wash";
// import PreventLanding from "./components/moleculas/Mol-Landing-prevent";
// import TrackerDiecinueve from "./components/render/trackers/tracker-covid19/Tracker-covid-diecinueve";
// import News from "./components/render/landing/landing-news/News";
// import Symptom from "./components/render/landing/landing-symptom/Symptom";
// import Spreads from "./components/render/landing/landing-spreads/Spreads";
// import Footer from "./components/render/landing/footer/Footer";
// import Buttons from "./components/atomos/buttons/Buttons.jsx";
// import LandingMobile from "./components/render/landing/landing-mobile/Landing-mobile";
//import TrackerRaiz from "./components/render/trackers/tracker-raiz/Tracker-raiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TrackerRaiz /> */}
        {/*<Symptom />
        <Buttons/>
        <PreventLanding/>
        <Spreads />
        <Question />
        <Washed />
        <News />
        <LandingMobile/>
        <Footer />
        <Desplegable />
        <Layout />
        <Trackerdos />
        <TrackerCuatro />
  <TrackerDiecinueve/>*/}
   <Layout />
        
      </header>
    </div>
  );
}

export default App;
