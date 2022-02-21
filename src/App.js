import "./App.css";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  function pushWeatherData(item) {
    setWeatherData([...weatherData, item]);
  }

  return (
    <div className="App">
      <Search pushWeatherData={pushWeatherData} />
      {weatherData.map((item, index) => {
        return <WeatherDisplay weatherData={item} key={index} />;
      })}
    </div>
  );
}

export default App;
