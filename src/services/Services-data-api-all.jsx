import { useEffect, useState } from "react";

const DataApiAll = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("https://disease.sh/v3/covid-19/all");
          const responseJson = await response.json();
          setAllData(responseJson); 
        }
        fetchData();
      }, []);
  return (
    allData
  );
}

export default DataApiAll;