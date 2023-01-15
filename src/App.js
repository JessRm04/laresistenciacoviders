import './App.css';
//import Layout from './components/Navbar'
//import DataContainer from './components/DataContainer';
//import Layout from './components/moleculas/Navbar'
//import {Tracker_seis, data, options} from './components/Tracker_seis';
//import CasesComponent from './components/covid19tracker';
import TableTracker from './components/moleculas/table/TableTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/*<Layout/>
        <Tracker_seis/>
        <DataContainer/>
        <Layout/>
        <Tracker_seis/>
        <CasesComponent/>*/}
        <TableTracker/>
      </header>
    </div>
  );    
};      

export default App;
