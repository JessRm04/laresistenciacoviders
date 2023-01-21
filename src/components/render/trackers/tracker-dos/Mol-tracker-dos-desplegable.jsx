import React from 'react';
import '../tracker-dos/tracker-dos.css';
import { useState, useEffect } from 'react';

function Desplegable() {
  const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const json = await response.json();
            setData(json);
        }
        fetchData();
        },[]);
        
  return (
    <div >
      {data && (
        <select id="my-select">
          <option value="option1">{data.updated}</option>        
        </select>
      )}
    </div>
  )
}

export default Desplegable;