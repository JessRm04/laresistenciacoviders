import './App.css';
import Layout from './components/moleculas/Navbar'
// import {Tracker_seis, data, options} from './components/Tracker_seis';
// import CasesComponent from './components/covid19tracker';
// import Top10 from './components/moleculas/top10';
import PreventLanding from './components/moleculas/Mol-Landing-prevent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout/>
        {/* <Tracker_seis/> */}
        {/* <CasesComponent/> */}
        {/* <Top10/> */}
        <PreventLanding/>
      </header>
    </div>
  );    
};      

export default App;
