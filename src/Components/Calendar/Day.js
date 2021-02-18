import React, { useState } from 'react'
import { GiMeditation } from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'
import { GrYoga } from 'react-icons/gr'
import { AiOutlineCoffee } from 'react-icons/ai'

const darkBlue = '#51c2d5';
const lightBlue = '#bbf1fa';
const purple = '#663f3f';
const white = '#ffffff'

const Days = ({ date, today, loadData }) => {
    const [bgColor, setBgColor] = useState(today ? darkBlue : lightBlue);

    const style = {
        backgroundColor: bgColor
    }

    const handleMouseEnter = () => {

        setBgColor(white)


    }

    const handleMouseLeave = () => {

        setBgColor(today ? darkBlue : lightBlue);

    }

    let dataFound = localStorage.getItem(date);
    let data;

    let meditate = false;
    let stretch = false;
    let excercise = false;
    let coffee = false;
    if (dataFound) {
        console.log(date)
        data = JSON.parse(dataFound);
        meditate = data.meditate === 'on' ? true : false;
        stretch = data.stretch === 'on' ? true : false;
        excercise = data.excercise === 'on' ? true : false;
        coffee = data.coffee === 'on' ? true : false;

    }




    return (
        <td className="day other-month" style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className="date">{date.split(' ')[2]}</div>
            <div>{meditate ? <GiMeditation /> : ''}</div>
            <div>{stretch ? <GrYoga /> : ''}</div>
            <div>{excercise ? <BiDumbbell /> : ''}</div>
            <div>{coffee ? <AiOutlineCoffee /> : ''}</div>
        </td>
    )
}

export default Days
