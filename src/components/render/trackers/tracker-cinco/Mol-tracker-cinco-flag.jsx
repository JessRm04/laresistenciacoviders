import React from 'react';
import DataApi from "../../../../services/Services-data-api-countries";
import "./Tracker-cinco.css";
import "bootstrap/dist/css/bootstrap.css";

const MolTrackerCincoFlags = () => {
  const responseData = DataApi();
  return responseData
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 9)
        .map((item) =>(
        <div className="nav-item" key={item.countryInfo._id}>
              <a data-toggle="tab" href={item.country} >
                <img
                  alt={item.country}
                  src={item.countryInfo.flag}
                  width="30"
                />
                {item.country}
              </a>
        </div>
        )
  );
}

export default MolTrackerCincoFlags;