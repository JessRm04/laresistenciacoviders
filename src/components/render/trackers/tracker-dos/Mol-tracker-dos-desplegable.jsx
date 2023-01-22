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
        <div className='desplegable'>
          <select id="my-select">
            <option value="option1">{data.country}</option>        
          </select>
        </div>
      )}
    </div>
  )
}

export default Desplegable;