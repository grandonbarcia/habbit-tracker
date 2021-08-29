import React from "react";

import { Row, Col, Form } from "react-bootstrap";

const Journal = ({ handleJournal, habitsTracked }) => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label>Journal: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="journal"
              onChange={handleJournal}
              value={habitsTracked.journal}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Journal;
