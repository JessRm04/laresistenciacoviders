import './App.css';
//import {Tracker_seis, data, options} from './components/Tracker_seis';
//import DataContainer from './components/DataContainer';
//import Layout from './components/moleculas/Navbar'
//import CasesComponent from './components/covid19tracker';
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
