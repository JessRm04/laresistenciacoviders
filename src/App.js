import './App.css';
import Layout from './components/moleculas/Navbar'
import {Tracker_seis, data, options} from './components/Tracker_seis';
import CasesComponent from './components/covid19tracker';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        <Layout/>
        <Tracker_seis/>
        <CasesComponent/>
      </header>
    </div>
  );    
};      

export default App;
