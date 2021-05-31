import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'


const HabbitToggleList = ({ handleChange, habitsTracked, setHabitsTracked }) => {

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
                        checked={habitsTracked.excercise}
                        onClick={() => setHabitsTracked({ ...habitsTracked, excercise: !habitsTracked.excercise })}
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="switch"
                        id="Stretch"
                        label="Stretch 10 mins"
                        name="stretch"
                        onChange={handleChange}
                        checked={habitsTracked.stretch}
                        onClick={() => setHabitsTracked({ ...habitsTracked, stretch: !habitsTracked.stretch })}
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
                        checked={habitsTracked.meditate}
                        onClick={() => setHabitsTracked({ ...habitsTracked, meditate: !habitsTracked.meditate })}
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="switch"
                        id="Coffee"
                        label="Drink Coffee"
                        name="coffee"
                        onChange={handleChange}
                        checked={habitsTracked.coffee}
                        onClick={() => setHabitsTracked({ ...habitsTracked, coffee: !habitsTracked.coffee })}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default HabbitToggleList
