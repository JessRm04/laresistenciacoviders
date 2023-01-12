import React from 'react';
import PropTypes from 'prop-types';

const TrackerTres = ({}) => {
  <>
  <h2>{country}</h2>
  <img src={bag} alt={country}></img>
  </>
 }
    TrackerTres.propTypes = {
        country:PropTypes.string.isRequired,
        bags: PropTypes.string.isRequired,
  }


export default TrackerTres;