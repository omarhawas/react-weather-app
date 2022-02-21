import "./App.css";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  function pushWeatherData(item) {
    setWeatherData([...weatherData, item]);
  }

  function removeWeatherData(city) {
    const newWeatherData = weatherData.filter((item) => {
      return item.city !== city;
    });
    setWeatherData(newWeatherData);
  }

  return (
    <div className="App">
      <Search pushWeatherData={pushWeatherData} weatherData={weatherData} />
      <Row xs={1} md={2} lg={3} className="g-4">
        {weatherData.map((item, index) => {
          return (
            <Col key={index}>
              <WeatherDisplay
                removeWeatherData={removeWeatherData}
                weatherData={item}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
