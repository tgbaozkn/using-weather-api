import "../styles.css";
import { Container, Navbar, Col, Row } from "react-bootstrap";
import "bootstrap";
import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSnowflake,
  faSun
} from "@fortawesome/free-solid-svg-icons";

function Beginning() {
  return (
    <>
      <Navbar className="navbar">
        {" "}
        <h1>Using Weather Api</h1>
      </Navbar>
      <Row>
        <FontAwesomeIcon
          style={{ color: " rgb(255, 205, 13,0.8)" }}
          icon={faSun}
          className="icon"
          onClick={() => console.log("hi")}
        />
        <label> Show Weather</label>
        <FontAwesomeIcon
          style={{ color: "white", textShadow: "3px 3px black" }}
          icon={faSnowflake}
          className="icon"
          onClick={() => console.log("hi")}
        />
      </Row>
    </>
  );
}
export { Beginning };
