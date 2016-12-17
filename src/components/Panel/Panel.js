import React from 'react';
import FilterBar from '../Panel/FiltersBar/FilterBar';
import CountriesContainer from './CountriesContainer/CountriesContainer';
import 'animate.css';
import './panel.css'

const Panel = (props) => {
  return (
    <div className={`panel-container animated ${props.panelClass}`}>
      <h2 className="title">Weather in country capitals</h2>
      <button className="close-btn" onClick={props.closePanelClick}>X</button>
      <FilterBar handleContinentChange={props.handleContinentChange}
                 handleSearch={props.handleSearch}
                 searchValue={props.searchValue}
                 continents={props.continents}
                 currentContinent={props.currentContinent}/>
      <CountriesContainer countriesData={props.countriesData}/>
    </div>
  )
};

export default Panel;
