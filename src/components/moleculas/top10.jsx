import React, {useState, useEffect} from 'react'
import Top10Component from "../atomos/Top10Component.jsx"




function Top10() {
     const [data, setData] = useState(null);
     const country = "spain/"
   
     useEffect(() => {
       async function fetchData() {
         const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
         const json = await response.json();
         setData(json);
       }
       fetchData();
     });
   
     return (
       <div>
         {data && (
          <div>
          <Top10Component img={"https://disease.sh/assets/img/flags/es.png"} country={data.country} numbers={data.country}/>
         </div>
          )}
       </div>
     );
   }
   
   export default Top10;