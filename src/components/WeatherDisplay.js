import React from "react";
import { Card, Popover, OverlayTrigger, Button } from "react-bootstrap";

function kelvinToCelsius(kelvin) {
  return Math.floor(parseInt(kelvin - 273.15));
}

function assignBackgroundClass(temp) {
  if (temp < 10) {
    return "background-blue";
  } else if (temp > 20) {
    return "background-red";
  } else {
    return "background-yellow";
  }
}

const WeatherDisplay = (props) => {
  return (
    <Card style={{ width: "26rem" }}>
      <Card.Body
        className={assignBackgroundClass(
          kelvinToCelsius(props.weatherData.temp)
        )}
      >
        <Card.Title>{props.weatherData.city}</Card.Title>
        <Card.Text>{kelvinToCelsius(props.weatherData.temp)}</Card.Text>
        <Card.Text>{kelvinToCelsius(props.weatherData.feelsLike)}</Card.Text>
        <Button onClick={() => props.removeWeatherData(props.weatherData.city)}>
          Remove
        </Button>
        {props.weatherData.alerts?.map((alert, idx) => {
          const popover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">{alert.sender_name}</Popover.Header>
              <Popover.Body>{alert.description}</Popover.Body>
            </Popover>
          );

          return (
            <OverlayTrigger
              key={idx}
              trigger="click"
              placement="right"
              overlay={popover}
            >
              <Button variant="success">Alert {idx + 1}</Button>
            </OverlayTrigger>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;
