import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import DataApi from '../../services/Services-data-api-countries';

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function TrackerSiete() {
 
 const responseData = DataApi();
 const data = responseData.map((item) =>( 
  [
    { country: item.country, value: item.cases }
  ]));

  return (
    <ComposableMap>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
  </ComposableMap>
  );
}

export default TrackerSiete;
