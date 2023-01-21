import { useEffect, useState } from "react";

const DataApiUsa = () => {

  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      
      const response = await fetch("https://disease.sh/v3/covid-19/countries/usa");
      const responseJson = await response.json();
      setResponseData(responseJson);
    }
    fetchData();
  }, []);
  return responseData;
};

export default DataApiUsa;