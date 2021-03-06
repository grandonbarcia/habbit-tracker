import React, { useState } from 'react'
import { GiMeditation } from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'
import { GrYoga } from 'react-icons/gr'
import { AiOutlineCoffee } from 'react-icons/ai'

const darkBlue = '#51c2d5';
const lightBlue = '#bbf1fa';
const white = '#ffffff'

const Days = ({ date, today, showHabitsDone }) => {


    let dataFound = localStorage.getItem(date);
    let data;
    let meditate = false;
    let stretch = false;
    let excercise = false;
    let coffee = false;

    if (dataFound) {

        data = JSON.parse(dataFound);
        meditate = data.meditate
        stretch = data.stretch
        excercise = data.excercise
        coffee = data.coffee

    }


    return (
        <td onClick={() => showHabitsDone(date)} className="day other-month" style={{ backgroundColor: today ? darkBlue : lightBlue }}  >
            <div className="date">{date.split(' ')[2]}</div>
            <div>{meditate ? <GiMeditation /> : ''}</div>
            <div>{stretch ? <GrYoga /> : ''}</div>
            <div>{excercise ? <BiDumbbell /> : ''}</div>
            <div>{coffee ? <AiOutlineCoffee /> : ''}</div>

        </td>
    )
}

export default Days
