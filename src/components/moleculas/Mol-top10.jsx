import React, {useState, useEffect} from 'react'
import Top10Component from "../moleculas/Mol-tracker-covid19/Top10Component.jsx"




function Top10() {
     const [data, setData] = useState();
     const country = "spain/"
   
     useEffect(() => {
       async function fetchData() {
         const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
         const json = await response.json();
         setData(json);
       }
       fetchData();
     },[]);
   
     return (
       <div>
         {data && (
          <div>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
          <Top10Component flag={data.countryInfo.flag} country={data.country} numbers={data.cases}/>
         </div>
          )}
       </div>
     );
   }
   
   export default Top10;