import React from 'react';
import DataApi from "../../services/Services-data-api-countries";

const MolTrackCuatroTodayCases = () => {
   const responseData = DataApi();
    return responseData
      .sort((a, b) => b.todayCases - a.todayCase)
      .slice(10, 20)
      .map((item) =>(
        <div className="item" key={item.countryInfo._id}>
            <img
              src={item.countryInfo.flag}
              alt={item.country}
              width="30"
            />
            <span>{item.country}</span>
            <span>{item.cases}</span>
          </div>
  ));
}

export default MolTrackCuatroTodayCases