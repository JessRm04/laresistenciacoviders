import React, {useState, useEffect} from 'react'
import Recuadro from './atomos/RecuadroTracker';
import "../components/atomos/recuadroTrackerStyle.css"
// import DataApiAll from '../services/Services-data-api-all'


function CasesComponent() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://disease.sh/v3/covid-19/all`);
        const json = await response.json();
        setData(json);
      }
      fetchData();
    });
  
    return (
      <div>
        {data && (
            <div className="containerStyle">
            <Recuadro texto="Total Case" numeros={data.cases} clase="recuadroStyle" />
            <Recuadro texto="Active Case" numeros={data.active} clase="recuadroStyle2"/>
            <Recuadro texto="Recovered Case" numeros={data.recovered} clase="recuadroStyle3"/>
            <Recuadro texto="Deaths Case" numeros={data.deaths} clase="recuadroStyle4"/>
            </div>
        )}
      </div>
    );
  }
  
// const CasesComponent = () => {
//   const responseData = DataApi();
//   return responseData
//     .sort((a, b) => b.active - a.active)
//     .slice(0, 10)
//     .map((item) =>(
//        <div className="containerStyle">
//             <Recuadro clase="recuadroStyle" texto="Total Case" numeros={responseData.todayCases}/>
//             <Recuadro clase="recuadroStyle2" texto="Active Case" numeros={responseData.active}/>
//             <Recuadro clase="recuadroStyle3" texto="Recovered Case" numeros={responseData.recovered}/>
//             <Recuadro clase="recuadroStyle4" texto="Deaths Case" numeros={responseData.todayDeaths}/>
//         </div> 
//    ))}

export default CasesComponent;
