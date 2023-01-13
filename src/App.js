import './App.css';
import Pruebas from './services/Pruebas';
//import Drawer from './components/moleculas/Drawer';
//import CasesComponent from './components/covid19tracker';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <Drawer/>
        <CasesComponent/> */}
       <Pruebas/>
      </header>
    </div>
  );    
};      

export default App;
