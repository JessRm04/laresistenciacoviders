import { useEffect, useState } from "react";

const DataApi = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("https://disease.sh/v3/covid-19/countries");
          const responseJson = await response.json();
          setResponseData(responseJson); 
        }
        fetchData();
      }, []);
  return (
    responseData
  );
}

export default DataApi; 