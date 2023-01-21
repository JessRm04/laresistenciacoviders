import React from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrackerDiecinueve from "../tracker-covid19/Tracker-covid-diecinueve";
//import TrackerCuatro from '../tracker-cuatro/Tracker-cuatro';
//import Trackerdos from "../tracker-dos/Mol-trackerdos";
import Layout from "../tracker-layout/Layout";
import "./tracker-raiz.css";
// import TrackerSeis from "../tracker-seis/Tracker_seis.jsx"
// import Trackerdos from '../tracker-dos/Mol-trackerdos';
// import TableTracker from '../../../moleculas/mol-track-tres-table/Mol-track-tres-table';

const TrackerRaiz = () => {
  return (
    <>
      <div>
        <Layout />
        <TrackerDiecinueve />
      </div>
      
    </>
  );
};

export default TrackerRaiz;
