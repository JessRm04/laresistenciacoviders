import React from 'react';
import PropTypes, { string } from 'prop-types';

const TrackerTres = ({country}) => <h2>{country}</h2>
    TrackerTres.propTypes = {
        country:PropTypes.string.isRequired
  }


export default TrackerTres;