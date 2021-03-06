import axios from "axios";
const TOKEN = process.env.REACT_APP_WEATHER_API_KEY;

export const getGeoCode = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${TOKEN}
      `
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${TOKEN}
      `
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
