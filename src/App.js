import React, { useState } from 'react';

//BootStrap
import { Container, Row } from 'react-bootstrap'

//Components
import Calendar from './Components/Calendar/Calendar';
import InputPanel from './Components/InputPanel/InputPanel';
import './App.css';

const initialState = { meditate: false, excercise: false, stretch: false, coffee: false, journal: '' }


const App = () => {

  const [update, forceUpdate] = useState(false);
  const [habitsTracked, setHabitsTracked] = useState(initialState)
  const [displayDate, setDisplayDate] = useState(new Date().toDateString());


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


  }

  const handleClick = () => {
    localStorage.setItem(displayDate, JSON.stringify(habitsTracked))
    forceUpdate(!update);
  }

  const handleJournal = e => {
    const { value } = e.target
    setHabitsTracked((prev) => { return { ...prev, journal: value } })
  }

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <InputPanel
          handleClick={handleClick}
          handleJournal={handleJournal}
          displayDate={displayDate}
          habitsTracked={habitsTracked}
          setHabitsTracked={setHabitsTracked}
        />
        <Calendar
          update={update}
          showHabitsDone={showHabitsDone}
        />
      </Row>
    </Container>
  );
}

export default App;
