import { Container, Col, Row } from "react-bootstrap";
import "../styles.css";
const WeatherResult = ({ data, capitalizeFirstLetter }) => {
  return (
    <Col>
      <Row>
        {" "}
        <p> {data.name} </p>{" "}
      </Row>
      <Row style={{ display: "flex" }} className="coord">
        <Col> Latitude : {JSON.stringify(data.coord.lat)} </Col>
        <Col style={{ width: "5rem" }}> </Col>
        <Col> Longtitude : {JSON.stringify(data.coord.lon)} </Col>{" "}
      </Row>
      {data.weather.map((weather) => (
        <>
          <Col style={{ height: "1.5rem" }}> </Col>
          <Row>
            Weather Situation:
            <span>
              &nbsp;&nbsp;&nbsp; {data.main.temp} °C, &nbsp; {weather.main}{" "}
            </span>
          </Row>

          <Col style={{ height: "1rem" }}> </Col>
          <Row>
            Detail of the situation:{" "}
            <span>
              &nbsp;&nbsp;
              {capitalizeFirstLetter(weather.description)} , &nbsp;&nbsp;
              {data.main.humidity}% humidity
            </span>{" "}
          </Row>
          <Col style={{ height: "1rem" }}> </Col>
          <Row>
            Feels like :{" "}
            <span>
              &nbsp;&nbsp;
              {data.main.feels_like} °C
            </span>{" "}
          </Row>
          <Col style={{ height: "1rem" }}> </Col>
        </>
      ))}

      <Row> Wind Speed : {data.wind.speed} m/s </Row>
      <Col style={{ height: "1rem" }}> </Col>
      <Row> The intense of clouds : {data.clouds.all} % </Row>
    </Col>
  );
};

export { WeatherResult };
