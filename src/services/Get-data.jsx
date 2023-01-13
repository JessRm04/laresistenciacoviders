import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/Tracker-cuatro.css";

const baseUrl = "https://disease.sh/v3/covid-19/";

function GetData() {
  //1 - Configurar los hooks
  const [responseData, setResponseData] = useState([]);
  //2 - Función para mostrar los datos con fetch
  useEffect(() => {
    async function fetchData() {
      const config = { headers: { Accept: "application/json" } };
      const response = await fetch(`${baseUrl}countries/usa`, config);
      const responseJson = await response.json();
      setResponseData(responseJson);
      console.log(responseJson);
    }
    fetchData();
  }, []);
  //3 - Configuramos el código para mostrar los datos
  return (
    <div className="row" id="TopCountryStats">
      <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
        <h4>Top Cases</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.cases}</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 col-6" id="CountryTodayCases">
        <h4> Today Cases</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.cases}</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 col-6" id="CountryTopDeaths">
        <h4> Today Deaths</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.deaths}</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 col-6" id="CountryTodayDeaths">
        <h4> Today Deaths</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.deaths}</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 col-6" id="CountryTopActive">
        <h4> Top Active</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.active}</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 col-6" id="CountryTopRecover">
        <h4> Top Recover</h4>
        <div className="item" key={responseData.countryInfo._id}>
          <img
            src={responseData.countryInfo.flag}
            alt={responseData.country}
            width="30"
          />
          <span>{responseData.country}</span>
          <span>{responseData.recovered}</span>
        </div>
      </div>
    </div>
  );
}

export default GetData;
