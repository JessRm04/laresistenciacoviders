import React from 'react';
import DataApi from "../../services/Data-api";

const MolTrackCuatro = () => {
   const responseData = DataApi();
    return responseData
      .sort((a, b) => b.responseData - a.responseData)
      .slice(0, 10)
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

export default MolTrackCuatro