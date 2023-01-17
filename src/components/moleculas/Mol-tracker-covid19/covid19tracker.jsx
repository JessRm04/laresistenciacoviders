import React from 'react'
import Recuadro from './atomos/RecuadroTracker';
import DataApiAll from '../services/Services-data-api-all';

const CasesComponent = ()=>{
    const responseData = DataApiAll();

    return(
       <div className="containerStyle">
            <Recuadro clase="recuadroStyle" texto="Total Case" numeros={responseData.todayCases}/>
            <Recuadro clase="recuadroStyle2" texto="Active Case" numeros={responseData.active}/>
            <Recuadro clase="recuadroStyle3" texto="Recovered Case" numeros={responseData.recovered}/>
            <Recuadro clase="recuadroStyle4" texto="Deaths Case" numeros={responseData.todayDeaths}/>
        </div> 
   )}

export default CasesComponent;
