import React, { useState, useEffect } from 'react';
import './atomos/recuadroTrackerStyle.css'
import Recuadro from './atomos/RecuadroTracker';
// import ApiData from './atomos/Tracker19function';



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
  
  export default CasesComponent;