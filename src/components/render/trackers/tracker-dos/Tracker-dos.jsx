import React from 'react';
import Desplegable from './Mol-tracker-dos-desplegable';
import MolTrackerDosCountry from './Mol-tracker-dos-country';
import MolTrackerDosWorld from './Mol-tracker-dos-world';
import './tracker-dos.css';


const TrackerDos = () => {
  return (
    <div className='containerTrackerDos'>
      <Desplegable/>
      <TrackerDos/>
      <MolTrackerDosWorld/>
    </div>
  )
}

export default TrackerDos;