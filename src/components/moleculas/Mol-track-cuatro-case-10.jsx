import React from 'react';
import DataApi from "../../services/Data-api";

const MolTrackCuatroDiez = () => {
   const responseData = DataApi();
    return responseData
      .sort((a, b) => b.cases - a.cases)
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

export default MolTrackCuatroDiez