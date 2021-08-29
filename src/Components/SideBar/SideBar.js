import React from "react";
import { Row, Col } from "react-bootstrap";
import Instructions from "./Instructions";

const InputPanel = ({ displayDate }) => {
  return (
    <Col className="h-100 side__bar" xl={3}>
      <Row className="text-center">
        <Col>
          <h1 className="app__title"> Habbit Tracker </h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h3>{displayDate}</h3>
        </Col>
      </Row>
      <Row>
        <Col className="Form__col">
          <Row>
            <Col>
              <Instructions />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default InputPanel;
