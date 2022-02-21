import axios from "axios";
// const TOKEN = process.env.WEATHER_API_TOKEN;

export const getGeoCode = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.WEATHER_API_TOKEN}
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_TOKEN}
      `
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
