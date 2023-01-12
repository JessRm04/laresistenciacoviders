import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Layout from './components/Navbar'
=======
import {Tracker_seis, data, options} from './components/Tracker_seis';
=======
import DataContainer from './components/DataContainer';
>>>>>>> 7ecee47a2b568124977686b50bfae83928cbe594
=======
import Layout from './components/moleculas/Navbar'
import {Tracker_seis, data, options} from './components/Tracker_seis';
import CasesComponent from './components/covid19tracker';
>>>>>>> 7a07e898d9b7737db7fd40647ff1fbf953e18374


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Layout/>
=======
        <Tracker_seis />
>>>>>>> fa8c588be21976b40fe47ac61126d280377d03f5
=======
        <DataContainer />
>>>>>>> 7ecee47a2b568124977686b50bfae83928cbe594
=======
        <Layout/>
        <Tracker_seis/>
        <CasesComponent/>
>>>>>>> 7a07e898d9b7737db7fd40647ff1fbf953e18374
      </header>
    </div>
  );    
};      

export default App;
