import React from 'react';
import {getAllContinents, getCountriesDataByContinent} from '../../actions/Actions';
import Header from '../Header/header';
import Panel from '../Panel/Panel';
import './app.css';

class App extends React.Component {

  constructor() {
    super();
    const continents = getAllContinents();
    this.state = {
      showPanel: false,
      continents: continents,
      currentContinent: continents[0].key,
      countriesData: [],
      originalData: [],
      searchValue: "",
      panelClass: "slideOutLeft"
    };
    this.showPanel = this.showPanel.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  componentDidMount() {
    getCountriesDataByContinent(this.state.currentContinent)
      .then(data => {
        this.setState({countriesData: data, originalData: data});
      });
  }

  handleContinentChange = (continent) => {
    getCountriesDataByContinent(continent)
      .then(data => {
        this.setState({currentContinent: continent, countriesData: data, originalData: data});
      });
  };

  handleSearchValue(e) {
    if (e.target.value == "")
      return this.setState({searchValue: e.target.value, countriesData: this.state.originalData});
    else {
      this.setState({
        searchValue: e.target.value,
        countriesData: this.state.originalData.filter(c =>
        c.name.toLowerCase().includes(e.target.value) ||
        c.capital.toLowerCase().includes(e.target.value) ||
        c.weather.toLowerCase().includes(e.target.value))
      });
    }
  }

  showPanel() {
    this.setState({panelClass:"slideInLeft"});
  }

  hidePanel() {
    this.setState({panelClass:"slideOutLeft"});
  }

  render() {
    const {continents, countriesData, searchValue, currentContinent, panelClass} = this.state;
    return (
      <div className="main-content">
        <Header openPanelClick={ this.showPanel }/>
        <Panel panelClass={panelClass}
               handleSearch={this.handleSearchValue}
               searchValue={searchValue}
               handleContinentChange={this.handleContinentChange}
               continents={continents}
               currentContinent={currentContinent}
               countriesData={countriesData}
               closePanelClick={ this.hidePanel }/>
      </div>
    )
  }
}

export default App;
