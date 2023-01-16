import React from 'react';
import './App.css';
// import Layout from './components/Layout';
import PreventLanding from './components/moleculas/Mol-Landing-prevent';
// import Top10 from './components/moleculas/Mol-top10';
// import CasesComponent from './components/covid19tracker'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Layout/> */}
        {/* <CasesComponent/> */}
        {/* <Top10/> */}
        <PreventLanding/>
        
      </header>
    </div>
  );    
};      

export default App;
