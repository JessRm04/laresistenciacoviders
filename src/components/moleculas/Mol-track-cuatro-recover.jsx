import React from 'react';
import DataApi from "../../services/Services-data-api";

const MolTrackCuatroRecover = () => {
    const responseData = DataApi();
    return responseData
      .sort((a, b) => b.recovered - a.recovered)
      .slice(0, 10)
      .map((item) =>(
        <div className="item" key={item.countryInfo._id}>
          <img
            src={item.countryInfo.flag}
            alt={item.country}
            width="30"
          />
          <span>{item.country}</span>
          <span>{item.recovered}</span>
        </div>
))};

export default MolTrackCuatroRecover