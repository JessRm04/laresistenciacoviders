import React from 'react'
import '../table/tableTracker.css'

function SelecOption() {
  return (
    <div className="show">
        <label className="labelOne">Show</label>
        <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <label className="labelTwo">entries</label>
    </div>
  );
};

export default SelecOption;