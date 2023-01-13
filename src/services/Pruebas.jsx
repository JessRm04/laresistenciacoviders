import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/tracker-cuatro/Tracker-cuatro.css";
import MolTrackCuatro from "../components/moleculas/Mol-track-cuatro";
import MolTrackCuatroDeath from "../components/moleculas/Mol-track-cuatro-death";

const Pruebas = () => {
  return( 
      <div className="row" id="TopCountryStats">
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Cases</h4>
          <MolTrackCuatro/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Cases</h4>
          <MolTrackCuatro/>
        </div>
        <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
          <h4>Top Death</h4>
          <MolTrackCuatroDeath/>
        </div>
      </div>
  )
};

export default Pruebas;
