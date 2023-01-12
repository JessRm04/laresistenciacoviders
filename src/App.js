import './App.css';
//import TrackerCuatro from './components/Tracker-cuatro';
// import DataContainer from './services/Data-container';
 import GetData from './services/Get-data';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        {/* <DataContainer />
        <TrackerCuatro /> */}
        <GetData />
        
      </header>
    </div>
  );
};

export default App;
