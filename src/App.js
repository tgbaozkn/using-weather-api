import "./styles.css";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import sdata from "./defaultsource/data.json";
import { Beginning } from "./components/Beginning";
import { WeatherResult } from "./components/WeatherResult";
//{//}
export default function App() {
  //capitalize func for lowercase words from api
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //some settings
  const [search, setSearch] = useState("");
  const [errorM, setErrorM] = useState(null);
  const [data, setData] = useState(sdata);
  //search func
  const letSearch = () => {
    if (search === "") {
      setData(sdata);
      setErrorM("You entered nothing.");
    }
    try {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          if (search !== "") {
            setData(result);
            console.log(data);
          } else {
            setSearch("Paris");
            setErrorM("The default value is setted as Paris.");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  //describing api
  const api = {
    key: "ab9f43128167e1065085687eb26127d3",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  //rendering
  return (
    <Container className="container">
      <Col>
        <Beginning />
        <Row>
          <input
            type="text"
            placeholder="Enter the city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span> &nbsp; </span>
          <FontAwesomeIcon
            icon={faSearch}
            className="icon"
            onClick={letSearch}
          />
        </Row>
        <p> {errorM} </p>
        {!data && (
          <Row>
            {" "}
            <b>{search} </b> searching..{" "}
          </Row>
        )}
        {typeof data === undefined ? (
          <div> </div>
        ) : (
          <WeatherResult
            data={data}
            capitalizeFirstLetter={capitalizeFirstLetter}
          />
        )}
      </Col>
    </Container>
  );
}
