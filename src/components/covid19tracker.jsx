import React from 'react'
//import '../atomos/recuadroTrackerStyle.css'
import Recuadro from './atomos/RecuadroTracker';
import DataApi from '../services/Services-data-api-countries';



const CasesComponent = ()=>{
    const responseData = DataApi();
    return responseData
    .slice(0, 4)
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
