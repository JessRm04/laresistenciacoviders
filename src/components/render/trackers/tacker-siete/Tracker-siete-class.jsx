import React, { Component } from "react";
import WorldMap from "react-svg-worldmap";

export default class Apper extends Component {
  render() {
    // ...
    const data = [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
    ];
    // ...
    return (
      <div id="root">
        <WorldMap color="green" title="This is My Map" size="lg" data={data} />
      </div>
    );
  }
}