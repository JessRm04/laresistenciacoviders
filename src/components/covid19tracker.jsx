import React from 'react'
//import '../atomos/recuadroTrackerStyle.css'
import Recuadro from './atomos/RecuadroTracker';
import DataApiAll from '../services/Services-data-api-all';

const CasesComponent = ()=>{
    const responseData = DataApiAll();
    return responseData
    .map((item)=>(
        <div className="containerStyle" key={item.countryInfo._id}>
            <Recuadro texto="Total Case" numeros={item.totals}/>
            <Recuadro texto="Active Case" numeros={item.active}/>
            <Recuadro texto="Recovered Case" numeros={item.recovered}/>
            <Recuadro texto="Deaths Case" numeros={item.deaths}/>
        </div>
        ));
    }
export default CasesComponent;