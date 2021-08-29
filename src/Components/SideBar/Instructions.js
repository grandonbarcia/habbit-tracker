import React from "react";
import { Card } from "react-bootstrap";

const Instructions = () => {
  return (
    <Card>
      <Card.Header>How it Works: </Card.Header>
      <Card.Body>
        <Card.Text>1. Click on a date.</Card.Text>
        <Card.Text>2. Toggle switches.</Card.Text>
        <Card.Text>3. Add text.</Card.Text>
        <Card.Text>4. Hit Done.</Card.Text>
        <Card.Text>
          Symbols will appear on the calendar corresponding to the date set at
          the top.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Instructions;
