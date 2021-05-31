import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import HabbitToggleList from './HabbitToggleList';

const InputPanel = ({ saveData, handleClick, habitsTracked, handleChange, handleJournal, setHabitsTracked, displayDate }) => {

    return (
        <Col className="h-100 shadow-lg" xl={3}>
            <Row className="text-center">
                <Col>
                    <h1> Habbit Tracker </h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <h3>{displayDate}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="Form__col">
                    {/* <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>When you woke up, how did you feel?  </Form.Label>
                                    <Form.Control type="range" name='happy' onChange={handleChange} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row> */}
                    <HabbitToggleList habitsTracked={habitsTracked} setHabitsTracked={setHabitsTracked} />
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Journal: </Form.Label>
                                    <Form.Control as="textarea" rows={3} name="journal" onChange={handleJournal} value={habitsTracked.journal} />
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
