import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import HabbitToggleList from "./HabbitToggleList";

const InputPanel = ({
  saveData,
  handleClick,
  habitsTracked,
  handleChange,
  handleJournal,
  setHabitsTracked,
  displayDate,
}) => {
  return (
    <Col className="h-100 shadow-lg" xl={3}>
      <Row className="text-center">
        <Col>
          <h1> Habbit Tracker </h1>
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
              <Card>
                <Card.Header>How it Works: </Card.Header>
                <Card.Body>
                  <Card.Text>1. Click on a date.</Card.Text>

                  <Card.Text>2. Toggle switches.</Card.Text>
                  <Card.Text>3. Add text.</Card.Text>
                  <Card.Text>4. Hit Done.</Card.Text>
                  <Card.Text>
                    Symbols will appear on the calendar corresponding to the
                    date set at the top.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default InputPanel;
