import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrackerDiecinueve from '../tracker-covid19/Tracker-covid-diecinueve';
import TrackerCuatro from '../tracker-cuatro/Tracker-cuatro';
import Trackerdos from '../tracker-dos/Tracker-dos';
import Layout from '../tracker-layout/Layout';
import "./tracker-raiz.css"
import TrackerSeis from "../tracker-seis/Tracker_seis.jsx"
import TableTracker from '../../../moleculas/mol-track-tres-table/Mol-track-tres-table';
import TrackerCinco from '../tracker-cinco/Tracker-cinco';
//import MolTrackerCincoCases from '../tracker-cinco/Mol-tracker-cinco-cases';
//import DosCountry from '../tracker-base/Dos-country';


const TrackerRaiz = () => {
  return (
      <BrowserRouter>
            <Layout />
            <TrackerDiecinueve />
            <Routes>
              <Route path='/'element={<Trackerdos/>}/>
              <Route path='/TrackerTres' element={<TableTracker/>}/>
              <Route path= '/TrackerCuatro' element={<TrackerCuatro/>}/>
              <Route path='/TrackerCinco'element={<TrackerCinco/>}/>
              <Route path='/TrackerSeis' element={<TrackerSeis/>}/>
              {/* <Route path='/TrackerSiete'element={<MolTrackerCincoCases/>}/> */}
              {/* <Route path='/TrackerOcho' element={<DosCountry/>}/> */}
            </Routes>
      </BrowserRouter>
  )
};

export default TrackerRaiz;