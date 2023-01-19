import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrackerDiecinueve from '../tracker-covid19/Tracker-covid-diecinueve';
import TrackerCuatro from '../tracker-cuatro/Tracker-cuatro';
// import Trackerdos from '../tracker-dos/Mol-trackerdos';
import Layout from '../tracker-layout/Layout';
import "./tracker-raiz.css"
import TrackerSeis from "../tracker-seis/Tracker_seis.jsx"
import Trackerdos from '../tracker-dos/Mol-trackerdos';
import TableTracker from '../../../moleculas/mol-track-tres-table/Mol-track-tres-table';

const TrackerRaiz = () => {
  return (
    <BrowserRouter className="browsercontainer">
      <div>
          <Layout />
          <TrackerDiecinueve />
      </div>
      <div>
          <Routes>
            <Route path='/' element={<Trackerdos/>}/>
            <Route path='/TrackerTres' element={<TableTracker/>}/>
            <Route path= '/TrackerCuatro' element={<TrackerCuatro/>}/>
            {/* <Route path='/TrackerCinco'/> */}
            <Route path='/TrackerSeis' element={<TrackerSeis/>}/>
            {/* <Route path='/TrackerSiete'/>
            <Route path='/TrackerOcho'/> */}
          </Routes>
      </div>
    </BrowserRouter>
  )
};

export default TrackerRaiz;