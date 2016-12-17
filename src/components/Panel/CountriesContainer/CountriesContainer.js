import React from 'react';
import CountryEntry from '../CountryEntry/CountryEntry';
import './countriesContainer.css';

const CountriesContainer = (props) => {

  return (
    <div className="container">
      {props.countriesData.map((country, i) => {
        return <CountryEntry key={i} country={country.name} capital={country.capital}
                             weather={country.weather}/>
      })}
    </div>
  )
};

export default CountriesContainer;
