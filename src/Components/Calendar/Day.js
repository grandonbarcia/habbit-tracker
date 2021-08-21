import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { GiMeditation } from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'
import { GrYoga } from 'react-icons/gr'
import { AiOutlineCoffee } from 'react-icons/ai'




const Days = ({ date, today, showHabitsDone }) => {

    const [isButtonDisplay, toggleButton] = useState(false)

    let dataFound = localStorage.getItem(date);
    let data, meditate, stretch, excercise, coffee;

    if (dataFound) {

        data = JSON.parse(dataFound);
        meditate = data.meditate
        stretch = data.stretch
        excercise = data.excercise
        coffee = data.coffee

    }


    return (
        <td onMouseEnter={() => toggleButton(true)} onMouseLeave={() => toggleButton(true)} onClick={() => showHabitsDone(date)} className="day other-month"  >
            <div className="date">{date.split(' ')[2]}</div>
            <div>{meditate ? <GiMeditation /> : ''}</div>
            <div>{stretch ? <GrYoga /> : ''}</div>
            <div>{excercise ? <BiDumbbell /> : ''}</div>
            <div>{coffee ? <AiOutlineCoffee /> : ''}</div>

        </td>
    )
}

export default Days
