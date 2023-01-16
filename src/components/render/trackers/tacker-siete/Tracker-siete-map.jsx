import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './Tracker-siete.css';

const TrackerSiete = () => {
  return (
    <div className='div-container'>
        <h3>Mapa</h3>
         <ComposableMap className='mapa'>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
  )
}

export default TrackerSiete;