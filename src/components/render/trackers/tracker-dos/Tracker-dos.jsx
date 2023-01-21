import React from 'react';
import Desplegable from './Mol-tracker-dos-desplegable';
import MolTrackerDosCountry from './Mol-tracker-dos-country';
import MolTrackerDosWorld from './Mol-tracker-dos-world';
import './tracker-dos.css';


const TrackerDos = () => {
  return (
    <div className='containerTracker tableContainer'>
      <Desplegable/>
      <MolTrackerDosCountry/>
      <MolTrackerDosWorld/>
    </div>
  )
}

export default TrackerDos;