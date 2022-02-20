import React from "react";
import { Card, Alert } from "react-bootstrap";

function kelvinToCelsius(kelvin) {
  return Math.floor(parseInt(kelvin - 273.15));
}

const WeatherDisplay = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.weatherData.city}</Card.Title>
          <Card.Text>{kelvinToCelsius(props.weatherData.temp)}</Card.Text>
          <Card.Text>{kelvinToCelsius(props.weatherData.feelsLike)}</Card.Text>
        </Card.Body>
      </Card>
      {props.weatherData.alerts?.map((alert, idx) => (
        <Alert key={idx} variant="warning">
          {alert.description}
        </Alert>
      ))}
    </div>
  );
};

export default WeatherDisplay;
