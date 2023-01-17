import "../../moleculas/mol-track-tres-table/mol-track-tres-table.css";
import React, { useState } from "react";
import TableTracker from "../../moleculas/mol-track-tres-table/Mol-track-tres-table";
import DataApi from "../../../services/Services-data-api-countries";

function InputSearch() {
  const data = DataApi();
  const [displayReports, setDisplayReports] = useState([]);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const matchedReports = data.filter(data => data.country.toLowerCase().includes(value.toLowerCase()));
    setDisplayReports(matchedReports);
  };

  return (
    <div>
      <input
        onChange={handleInputChange}
        id="search-field"
        type="text"
        className="form-control"
        placeholder="Search your Country..."
        aria-label=""
        aria-describedby="button-addon2"
      ></input>

      <TableTracker data={displayReports} />
    </div>
  );
}

export default InputSearch;
