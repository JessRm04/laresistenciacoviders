import React from 'react'
import Top10Component from "../moleculas/Mol-tracker-covid19/Top10Component.jsx"
import DataApi from '../../services/Services-data-api-countries.jsx'

function Top10() {
  const responseData = DataApi();
     return responseData
       .sort((a, b) => b.active - a.active)
       .slice(0, 10)
       .map((item) =>(
          <div>
          <Top10Component flag={item.countryInfo.flag} country={item.country} numbers={item.cases}/>
         </div>    
 ))};
   
   export default Top10;
