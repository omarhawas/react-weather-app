import React from "react";
import { Card, Popover, OverlayTrigger, Button } from "react-bootstrap";

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
    </div>
  );
};

export default WeatherDisplay;
