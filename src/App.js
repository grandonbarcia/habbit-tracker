import React, { useState } from "react";

//BootStrap
import { Container, Row } from "react-bootstrap";

//Components
import Calendar from "./Components/Calendar/Calendar";
import SideBar from "./Components/SideBar/SideBar";
import InputModal from "./Components/InputModal/InputModal";
import "./App.css";

const initialState = {
  meditate: false,
  excercise: false,
  stretch: false,
  coffee: false,
  journal: "",
};

const App = () => {
  const [update, forceUpdate] = useState(false);
  const [habitsTracked, setHabitsTracked] = useState(initialState);
  const [displayDate, setDisplayDate] = useState(new Date().toDateString());

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showHabitsDone = (date) => {
    let dataFound = localStorage.getItem(date);
    setDisplayDate(date);
    if (dataFound) {
      let data = JSON.parse(dataFound);
      console.log(data);
      setHabitsTracked(data);
    } else {
      setHabitsTracked(initialState);
    }
  };

  const handleClick = () => {
    localStorage.setItem(displayDate, JSON.stringify(habitsTracked));
    setShow(false);
    forceUpdate(!update);
  };

  const handleJournal = (e) => {
    const { value } = e.target;
    setHabitsTracked((prev) => {
      return { ...prev, journal: value };
    });
  };

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <SideBar />
        <Calendar
          update={update}
          showHabitsDone={showHabitsDone}
          handleShow={handleShow}
        />
        <InputModal
          show={show}
          handleClick={handleClick}
          handleClose={handleClose}
          handleJournal={handleJournal}
          habitsTracked={habitsTracked}
          setHabitsTracked={setHabitsTracked}
          displayDate={displayDate}
        />
      </Row>
    </Container>
  );
};

export default App;
