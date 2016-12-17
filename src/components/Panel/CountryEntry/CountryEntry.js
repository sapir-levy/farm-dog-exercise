import React from 'react';
import './countryEntry.css';

const CountryEntry = (props) =>{
  return(
    <div className="entry">
      <span className="country-name col">{props.country}</span>
      <span cla className="col">{props.capital}</span>
      <span className="col">{props.weather}</span>
    </div>
  )
};

export default CountryEntry;
