import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../tracker-cuatro/Tracker-cuatro.css";
import MolTrackCuatroDiez from "../moleculas/Mol-track-cuatro-case-10";
import MolTrackCuatroTodayCases from "../moleculas/Mol-track-cuatro-todayCases";
import MolTrackCuatroDeathDiez from "../moleculas/Mol-track-cuatro-death-10";
import MolTrackCuatroTodayDeaths from "../moleculas/Mol-track-cuatro-todayDeath";
import MolTrackCuatroActive from "../moleculas/Mol-track-cuatro-active";
import MolTrackCuatroRecover from "../moleculas/Mol-track-cuatro-recover";


const TrackerCuatro = () => {
  return( 
    <>
    <h1 className="stat-head">Top 10 Country wise Covid-19 Updates - Tiles</h1>
    <hr/>
      <div className="row" id="TopCountryStats">
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Cases</h4>
          <MolTrackCuatroDiez/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Today Cases</h4>
          <MolTrackCuatroTodayCases/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Death</h4>
          <MolTrackCuatroDeathDiez/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Today Death</h4>
          
          <MolTrackCuatroTodayDeaths/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Active</h4>
          <MolTrackCuatroActive/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Recover</h4>
          <MolTrackCuatroRecover/>
        </div>
      </div>
      </>
  )
};

export default TrackerCuatro;
