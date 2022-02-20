import "./App.css";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "Toronto",
    temp: "200",
    feelsLike: "70",
    alerts: [{ description: "Yellow wind warning" }],
  });
  return (
    <div className="App">
      <Search setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
