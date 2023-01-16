import React from 'react'
//import '../atomos/recuadroTrackerStyle.css';
import Recuadro from './atomos/RecuadroTracker';
import DataApiAll from '../services/Services-data-api-all';



const CasesComponent = ()=>{
    const responseData = DataApiAll();
    return(
       <div className="containerStyle" key={responseData.countryInfo._id}>
            <Recuadro texto="Total Case" numeros={responseData.totals}/>
            <Recuadro texto="Active Case" numeros={responseData.active}/>
            <Recuadro texto="Recovered Case" numeros={responseData.recovered}/>
            <Recuadro texto="Deaths Case" numeros={responseData.deaths}/>
        </div> 
   );
}
export default CasesComponent;
