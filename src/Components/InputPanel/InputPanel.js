import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import useForm from '../../Hooks/useForm'
import HabbitToggleList from './HabbitToggleList';

const InputPanel = ({ saveData, forceUpdate, update }) => {

    const [todaysDate, setTodaysDate] = useState('');

    const switchRef = useRef();

    const { handleChange, formData, setFormData } = useForm();

    const [toggleSwitch, setSwitch] = useState(false);

    const handleClick = () => {
        console.log(switchRef.current.name);
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log(today.toDateString());
        localStorage.setItem(today.toDateString(), JSON.stringify(formData))
        forceUpdate(!update)

    }


    useEffect(() => {

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        setTodaysDate(today.toDateString());

    }, [])





    return (

        <Col className="h-100 shadow-lg" xl={3}>
            <Row className="text-center">
                <Col>
                    <h1> Habbit Tracker </h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <h3>{todaysDate}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="Form__col">
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>When you woke up, how did you feel?  </Form.Label>
                                    <Form.Control type="range" name='happy' onChange={handleChange} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <HabbitToggleList handleChange={handleChange} toggleSwitch={toggleSwitch} switchRef={switchRef} />
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Journal: </Form.Label>
                                    <Form.Control as="textarea" rows={3} name="journal" onChange={handleChange} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={handleClick}>Done</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Col>

    )
}

export default InputPanel
