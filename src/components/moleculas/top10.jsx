import React, {useState, useEffect} from 'react'
import Top10Component from "../atomos/Top10Component.jsx"



function Top10() {
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
          <div>
          <Top10Component src={'hola'} country={data.cases} numbers={data.cases}/>
         </div>
          )}
       </div>
     );
   }
   
   export default Top10;