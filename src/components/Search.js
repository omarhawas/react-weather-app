import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { getGeoCode, getWeather } from "../utils/weatherApi";

function Search(props) {
  const [city, setCity] = useState("Toronto");

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  async function handleSearch() {
    const response = await getGeoCode(city);
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    const weatherResponse = await getWeather(lat, lon);
    const temp = weatherResponse.data.current.temp;
    const feelsLike = weatherResponse.data.current.feels_like;
    const alerts = weatherResponse.data.alerts;
    props.pushWeatherData({
      city: city,
      temp: temp,
      feelsLike: feelsLike,
      alerts: alerts,
    });
    console.log(city);
    console.log(temp);
    console.log(feelsLike);
    console.log(alerts);
  }

  return (
    <div>
      <h1>Search for city</h1>
      <InputGroup>
        <InputGroup.Text>Enter City</InputGroup.Text>
        <FormControl value={city} onChange={handleInputChange} />
      </InputGroup>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default Search;
