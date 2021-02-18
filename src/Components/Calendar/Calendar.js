import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Week from './Week'
import Day from './Day'
import WeekDays from './WeekDays'
import Data from './Data'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'



const CalendarPanel = ({ loadData, update }) => {

    const [value, onChange] = useState(new Date());
    const [monthName, setMonthName] = useState('');
    const [numOfDays, setNumOfDays] = useState([]);
    const [arrOfDates, setArrOfDates] = useState([]);
    const [todaysDate, setTodaysDate] = useState(0);
    const calendar = Object.entries(Data)


    const createCalendar = () => {

        const today = new Date();
        const thisYear = today.getFullYear();

        const lastMonthNum = today.getMonth() - 1;
        const lastMonth = calendar[lastMonthNum][1];

        const thisMonthNum = today.getMonth();
        const thisMonth = calendar[thisMonthNum][1];


        const nextMonthNum = today.getMonth() + 1;
        const nextMonth = calendar[nextMonthNum][1]




        const firstOfTheMonth = new Date(`${thisMonth.name} 1, ${thisYear} 00:00:00`)

        let daysInCalendar = [];
        let datesInCalendar = [];

        let currentDate = new Date(`${lastMonth.name} 1, ${thisYear} 00:00:00`);

        for (let i = 0; i < firstOfTheMonth.getDay(); i++) {
            daysInCalendar.push(lastMonth.days)
            currentDate.setDate(lastMonth.days)
            datesInCalendar.push(currentDate.toDateString());
        }

        currentDate = new Date();

        for (let j = 1; j <= thisMonth.days; j++) {
            currentDate.setDate(j);
            datesInCalendar.push(currentDate.toDateString())
            daysInCalendar.push(j);
        }

        currentDate = new Date(`${nextMonth.name} 1, ${thisYear} 00:00:00`);

        for (let k = 1; k <= 35 - daysInCalendar.length + 1; k++) {
            currentDate.setDate(k)
            datesInCalendar.push(currentDate.toDateString());
            daysInCalendar.push(k)

        }

        setMonthName(thisMonth.name)
        setNumOfDays(() => [...daysInCalendar])
        setArrOfDates(() => [...datesInCalendar])
        setTodaysDate(today.getDate())

    }


    useEffect(() => {

        createCalendar();

    }, [])

    useEffect(() => {

        createCalendar();

    }, [update])




    const switchMonth = (direction) => {

    }



    let listCalendarDays = arrOfDates.map((el, i) =>


        <Day date={el} today={i === todaysDate ? true : false} key={i} index={i} loadData={loadData} />


    )





    return (

        <Col className="h-100" xl={9}>
            <Row>
                <Col>
                    <Row className="justify-content-center text-center" style={{ height: '10%' }}>
                        <Col className="my-auto" xl={1}>
                            <FaArrowAltCircleLeft size={32} onClick={() => switchMonth('prev')} />
                        </Col>
                        <Col className="my-auto" xl={2}>
                            <h1>{monthName}</h1>
                        </Col>
                        <Col className="my-auto" xl={1}>
                            <div><FaArrowAltCircleRight size={32} onClick={() => switchMonth('next')} /></div>
                        </Col>
                    </Row>
                    <table id='calendar'>
                        <tbody>
                            <WeekDays />
                            {listCalendarDays}
                        </tbody>
                    </table>
                </Col>
            </Row>

        </Col>

    )
}

export default CalendarPanel
