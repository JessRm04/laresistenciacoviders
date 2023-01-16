import React from 'react'
import Recuadro from './atomos/RecuadroTracker';
import DataApiAll from '../services/Services-data-api-all'



const CasesComponent = ()=>{
    const responseData = DataApiAll();
    return(
       <div className="containerStyle">
            <Recuadro texto="Total Case" numeros={responseData.todayCases}/>
            <Recuadro texto="Active Case" numeros={responseData.active}/>
            <Recuadro texto="Recovered Case" numeros={responseData.recovered}/>
            <Recuadro texto="Deaths Case" numeros={responseData.todayDeaths}/>
        </div> 
   );
}
export default CasesComponent;
