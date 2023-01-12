/*const baseUrl = 'https://disease.sh/v3/covid-19/countries'

export async function disease() {

    const config = {
        headers: {
          Accept: 'application/json',
        },
      }

      const response = await fetch(baseUrl, config);
      const responseJson = await response.json()
      console.log(responseJson);
      return responseJson;
};

export default disease;
*/

import React, { useState, useEffect } from 'react';

function Disease() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
  fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => setData(data));
  },[]);

  return data
};

export default Disease; 
