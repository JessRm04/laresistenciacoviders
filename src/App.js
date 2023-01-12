import './App.css';
//import Layout from './components/Navbar'
//import DataContainer from './components/DataContainer';
//import Layout from './components/moleculas/Navbar'
//import {Tracker_seis, data, options} from './components/Tracker_seis';
//import CasesComponent from './components/covid19tracker';
import Table_tracker from './components/moleculas/table/Table_tracker';

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
        <Table_tracker/>
      </header>
    </div>
  );    
};      

export default App;
