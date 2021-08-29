import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Day from "./Day";
import WeekDays from "./WeekDays";
import Data from "./Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const listOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const calendar = Object.entries(Data);

const CalendarPanel = ({ update, showHabitsDone, handleShow }) => {
  const [month, setMonth] = useState(new Date());
  const [monthName, setMonthName] = useState();
  const [arrOfDates, setArrOfDates] = useState([]);
  const [todaysDate, setTodaysDate] = useState(0);

  useEffect(() => {
    const createCalendar = () => {
      const today = month;
      const thisYear = today.getFullYear();

      const lastMonthNum =
        today.getMonth() - 1 === -1 ? 11 : today.getMonth() - 1;
      const lastMonth = calendar[lastMonthNum][1];

      const thisMonthNum = today.getMonth();
      const thisMonth = calendar[thisMonthNum][1];

      const nextMonthNum =
        today.getMonth() + 1 === 12 ? 0 : today.getMonth() + 1;
      const nextMonth = calendar[nextMonthNum][1];

      const firstOfTheMonth = new Date(
        `${thisMonth.name} 1, ${thisYear} 00:00:00`
      );

      let datesInCalendar = [];

      let currentDate = new Date(`${lastMonth.name} 1, ${thisYear} 00:00:00`);

      for (let i = 1; i <= firstOfTheMonth.getDay(); i++) {
        currentDate.setDate(lastMonth.days - firstOfTheMonth.getDay() + i);
        datesInCalendar.push(currentDate.toDateString());
      }

      currentDate = today;

      for (let j = 1; j <= thisMonth.days; j++) {
        currentDate.setDate(j);
        datesInCalendar.push(currentDate.toDateString());
      }

      currentDate = new Date(`${nextMonth.name} 1, ${thisYear} 00:00:00`);

      for (let k = 1; k <= 35 - datesInCalendar.length + 1; k++) {
        currentDate.setDate(k);
        datesInCalendar.push(currentDate.toDateString());
      }
      setMonthName(thisMonth.name);
      setArrOfDates(() => [...datesInCalendar]);
      setTodaysDate(new Date().toDateString());
    };

    createCalendar();
  }, [update, month]);

  const goToPrevMonth = () => {
    setMonth(
      new Date(
        `${
          listOfMonths[month.getMonth() - 1 === -1 ? 11 : month.getMonth() - 1]
        } 1, 2021 00:00:00`
      )
    );
  };

  const goToNextMonth = () => {
    setMonth(
      new Date(
        `${
          listOfMonths[month.getMonth() + 1 === 12 ? 0 : month.getMonth() + 1]
        } 1, 2021 00:00:00`
      )
    );
  };

  let listCalendarDays = arrOfDates.map((el, i) => {
    return (
      <Day
        date={el}
        today={el === todaysDate ? true : false}
        key={i}
        index={i}
        showHabitsDone={showHabitsDone}
        handleShow={handleShow}
      />
    );
  });

  return (
    <Col className="h-100 calendar" xl={9}>
      <Row className="h-100">
        <Col>
          <Row
            className="justify-content-center text-center title__row"
            style={{ height: "10%" }}
          >
            <Col className="my-auto" xl={1}>
              <FaArrowAltCircleLeft size={32} onClick={() => goToPrevMonth()} />
            </Col>
            <Col className="my-auto" xl={2}>
              <h1>{monthName}</h1>
            </Col>
            <Col className="my-auto" xl={1}>
              <FaArrowAltCircleRight
                size={32}
                onClick={() => goToNextMonth()}
              />
            </Col>
          </Row>
          <table id="calendar">
            <tbody>
              <WeekDays />
              {listCalendarDays}
            </tbody>
          </table>
        </Col>
      </Row>
    </Col>
  );
};

export default CalendarPanel;
