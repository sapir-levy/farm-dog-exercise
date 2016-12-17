const countriesApiUrl = "http://restcountries.eu/rest/v1/region/";
const weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const weatherApiKey = "&appid=d78a8c6d4f706d9e844b428d64c6221f";

const continentsCountriesAndWeather = [{key: "Americas", value: "America"},
  {key: "Africa", value: "Africa"},
  {key: "Europe", value: "Europe"},
  {key: "Asia", value: "Asia"},
  {key: "Oceania", value: "Oceania"}];

export const getAllContinents = () => {
  return continentsCountriesAndWeather.reduce((prev, continent) => {
    prev.push({key: continent.key, value: continent.value});
    return prev;
  }, [])
};

export const getCountriesDataByContinent = (continent) => {
  if (continentsCountriesAndWeather.find(c => c.key == continent)["data"])
    return new Promise((resolve) => {
      resolve(continentsCountriesAndWeather.find(c => c.key == continent)["data"]);
    });

  return fetch(`${countriesApiUrl}${continent}`, {
    method: 'get',
    mode: 'cors'
  }).then(response => {
    return response.json();
  }).then((countries) => {
    const citiesWeather = countries.reduce((prev, country) => {
      if (country.capital != "")
        prev.push(getWeatherByCity(country.capital));
      return prev;
    }, []);
    return Promise.all(citiesWeather).then(weatherResult => {
      return continentsCountriesAndWeather.find(c => c.key == continent)["data"] = countries.reduce((prev, country) => {
        const cityWeather = weatherResult.find(w => w.name == country.capital);
        if (cityWeather)
          prev.push({
            name: country.name,
            capital: country.capital,
            weather: cityWeather.weather[0].description
          });
        return prev;
      }, []);
    });
  });
};

export const getWeatherByCity = (city) => {
  return fetch(`${weatherApiUrl}${city}${weatherApiKey}`, {
    method: 'get',
    mode: 'cors'
  })
    .then(response => {
      return response.json()
    });
};
