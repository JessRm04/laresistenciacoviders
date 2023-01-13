import React from 'react';
import DataApi from "../../services/Data-api";

const MolTrackCuatroTodayDeaths = () => {
    const responseData = DataApi();
    return responseData
      .sort((a, b) => b.todayDeaths - a.todayDeaths)
      .slice(10, 20)
      .map((item) =>(
        <div className="item" key={item.countryInfo._id}>
            <img
              src={item.countryInfo.flag}
              alt={item.country}
              width="30"
            />
            <span>{item.country}</span>
            <span>{item.deaths}</span>
          </div>
  ));
}

export default MolTrackCuatroTodayDeaths