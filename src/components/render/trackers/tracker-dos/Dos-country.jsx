import React from "react";
import covidred from "../../../../assets/img/covidred.svg";
import DataApiAll from "../../../../services/Services-data-api-all";
import './dos-country.css';


const DosCountry = () => {
    const responseData = DataApiAll();
  return (
    <div>
      <div class="col-md-4 col-lg-6 col-6">
        <div class="covid-widget-1 red-bx">
          <div class="icon">
            <img src={covidred} alt="" />
          </div>
          <div class="info">
            <h5>Total Deaths</h5>
            <h3>{responseData.deaths}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosCountry;
