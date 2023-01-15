import React, { useState } from 'react'
import '../table/tableTracker.css'
import {paginatedData} from "../table/TableTracker"
import { Component } from 'react';

function InputSearch() {
  return (
    <div className="search" type="submit">
        <label className="labelThree">Search:</label>
        <input type="text"/>
    </div>
  );

};

export default InputSearch;

/*const [search, setSearch] = useState('');
const handleChange = ({e}) => {
  setSearch (e.target.value);
}

const filterCountry = paginatedData.filter(data => key={data.country})*/
/*class Search extends Component{
    constructor(props){
      super(props);
      this.state = {filter: ''};
    }
    handleChange(value, e){
      this.setState({filter: value});
    }
    render(){
      const ciudad = this.props.paginatedData.filter(data => key={data.country});
    }
  }*/