import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const HabbitToggleList = ({
  handleChange,
  habitsTracked,
  setHabitsTracked,
}) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Switch
            id="Excercise"
            label="Excercise 1hr"
            name="excercise"
            defaultChecked={habitsTracked.excercise}
            onClick={() =>
              setHabitsTracked({
                ...habitsTracked,
                excercise: !habitsTracked.excercise,
              })
            }
          />
        </Col>
        <Col>
          <Form.Check
            type="switch"
            id="Stretch"
            label="Stretch 10 mins"
            name="stretch"
            defaultChecked={habitsTracked.stretch}
            onClick={() =>
              setHabitsTracked({
                ...habitsTracked,
                stretch: !habitsTracked.stretch,
              })
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check
            type="switch"
            id="Meditate"
            label="Meditate 20 mins"
            name="meditate"
            defaultChecked={habitsTracked.meditate}
            onClick={() =>
              setHabitsTracked({
                ...habitsTracked,
                meditate: !habitsTracked.meditate,
              })
            }
          />
        </Col>
        <Col>
          <Form.Check
            type="switch"
            id="Coffee"
            label="Drink Coffee"
            name="coffee"
            defaultChecked={habitsTracked.coffee}
            onClick={() =>
              setHabitsTracked({
                ...habitsTracked,
                coffee: !habitsTracked.coffee,
              })
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default HabbitToggleList;
