import React from 'react'
import './atomos/recuadroTrackerStyle.css'
import Recuadro from './atomos/RecuadroTracker';


const api_totals = "API números"
const api_active = "API números"
const api_recovered = "API números"
const api_deaths = "API números"

function CasesComponent ({texto, numeros}){
    return(
        <div className="containerStyle">
            <Recuadro texto="Total Case" numeros={api_totals} clase="recuadroStyle"/>
            <Recuadro texto="Active Case" numeros={api_active} clase="recuadroStyle2"/>
            <Recuadro texto="Recovered Case" numeros={api_recovered} clase="recuadroStyle3"/>
            <Recuadro texto="Deaths Case" numeros={api_deaths} clase="recuadroStyle4"/>
        </div>
        )}

export default CasesComponent;
