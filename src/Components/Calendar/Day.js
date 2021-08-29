import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { GiMeditation } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { FiBook } from "react-icons/fi";

const Days = ({ date, today, showHabitsDone, handleShow }) => {
  const [displayButton, toggleButton] = useState(false);

  let dataFound = localStorage.getItem(date);
  let data, meditate, stretch, excercise, coffee, journal;
  let dateNum = date.split(" ")[2];

  if (dataFound) {
    data = JSON.parse(dataFound);
    meditate = data.meditate;
    stretch = data.stretch;
    excercise = data.excercise;
    coffee = data.coffee;
    journal = data.journal;
  }

  const style = {
    height: "30px",
    width: "30px",
    marginTop: "auto",
    marginLeft: "auto",
    color: "#007BFF",
  };

  return (
    <td
      onMouseEnter={() => toggleButton(true)}
      onMouseLeave={() => toggleButton(false)}
      onClick={() => showHabitsDone(date)}
      className="day"
    >
      <div className="date">{dateNum}</div>
      <Row>
        <Col>
          <div>{meditate && <GiMeditation />}</div>
        </Col>
        <Col>
          <div>{stretch && <GrYoga />}</div>
        </Col>
        <Col>
          <div>{excercise && <BiDumbbell />}</div>
        </Col>
        <Col>
          <div>{coffee && <AiOutlineCoffee />}</div>
        </Col>
        <Col>
          <div>{journal && <FiBook />}</div>
        </Col>
      </Row>
      {displayButton && <BsPlusCircleFill style={style} onClick={handleShow} />}
    </td>
  );
};

export default Days;
