import React from "react";
import TrackerTres from "./TrackerTres";
import disease from "../services/disease";

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      isFetch: true,
    };
  }
 async componentDidMount() {
    const responseJson = await disease();
    this.setState({country: responseJson.country, isFetch: false})
  }

  render() {
    const { isFetch, country } = this.state;
    if (isFetch) {
      return "Loading ...";
    }
    return;
    country.map((country) => <TrackerTres {...country} key={country.countryInfo._id} />);
  }
}
export default DataContainer;
