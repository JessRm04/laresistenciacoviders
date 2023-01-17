import React from "react"
import CasesComponent from "../../../moleculas/Mol-tracker-covid19/covid19tracker.jsx"
import Top10 from "../../../moleculas/Mol-top10.jsx"
import "./tracker-covid-diecinueve.css"

function TrackerDiecinueve() {
        return (
            <div className="tracker19container">
                <h1>COVID-19 Tracker</h1>
                <CasesComponent/>
                <h2>Top 10 Country</h2>
                <Top10/>
            </div>
        )
    };

export default TrackerDiecinueve;
