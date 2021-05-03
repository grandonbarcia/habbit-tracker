import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import useForm from '../../Hooks/useForm'

const HabbitToggleList = ({ handleChange, switchRef, toggleSwitch }) => {
    return (
        <div>
            <Row>
                <Col>
                    Did you......?
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Switch
                        id="Excercise"
                        label="Excercise 1hr"
                        name="excercise"
                        onChange={handleChange}
                        ref={switchRef}
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

        </div>
    )
}

export default HabbitToggleList
