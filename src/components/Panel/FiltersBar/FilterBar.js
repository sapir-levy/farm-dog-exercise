import React from 'react';
import './filterBar.css';

const FilterBar = (props) => {
  return (
    <div className="filter-bar">
      <select className="filter" value={props.currentContinent} onChange={(e) => props.handleContinentChange(e.target.value)}>
        {props.continents.map((continent, index) => {
          return <option key={index} value={continent.key}>{continent.value}</option>
        })}
      </select>
      <input className="filter search" placeholder="Search country ,city or weather" value={props.searchValue}
             onChange={(e) => props.handleSearch(e)}/>
    </div>
  )
};

export default FilterBar;

