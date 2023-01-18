import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrackerDiecinueve from '../tracker-covid19/Tracker-covid-diecinueve';
import TrackerCuatro from '../tracker-cuatro/Tracker-cuatro';
import Trackerdos from '../tracker-dos/Mol-trackerdos';
import Layout from '../tracker-layout/Layout';

const TrackerRaiz = () => {
  return (
    <BrowserRouter>
      <Layout />
      <TrackerDiecinueve />
      <Routes>
        <Route path='/Trackerdos'>
          <Trackerdos />
        </Route>
        <Route path='/TrackerCuatro'>
          <TrackerCuatro />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default TrackerRaiz