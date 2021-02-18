import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import useForm from '../Hooks/useForm'

const InputPanel = ({ saveData }) => {

    const [todaysDate, setTodaysDate] = useState('');

    const { handleChange, formData, setFormData } = useForm();

    const handleClick = () => {

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log(today.toDateString());
        localStorage.setItem(today.toDateString(), JSON.stringify(formData))


    }


    useEffect(() => {

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        setTodaysDate(today.toDateString());

    }, [])

    useEffect(() => {
        console.log(formData);
    }, [formData])



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
                    <Row>
                        <Col>
                            Did you......?
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="Excercise"
                                label="Excercise 1hr"
                                name="excercise"
                                onChange={handleChange}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="Stretch"
                                label="Stretch 10 mins"
                                name="stretch"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="Meditate"
                                label="Meditate 20 mins"
                                name="meditate"
                                onChange={handleChange}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="Coffee"
                                label="Drink Coffee"
                                name="coffee"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
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
                    <Row>
                        <Col>
                            <h4>Quote Of The Day</h4>
                            <h5>- Author </h5>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Col>

    )
}

export default InputPanel
