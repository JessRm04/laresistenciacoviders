import './App.css';
import Layout from './components/moleculas/Navbar'
// import {Tracker_seis, data, options} from './components/Tracker_seis';
// import CasesComponent from './components/covid19tracker';
import Top10 from './components/moleculas/top10';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout/>
        {/* <Tracker_seis/> */}
        {/* <CasesComponent/> */}
        <Top10/>
      </header>
    </div>
  );    
};      

export default App;
