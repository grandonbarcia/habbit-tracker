import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'


const HabbitToggleList = ({ handleChange, habitsTracked, setHabitsTracked }) => {

    return (
        <div>

            <Row>
                <Col>
                    <Form.Switch
                        id="Excercise"
                        label="Excercise 1hr"
                        name="excercise"

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

                        checked={habitsTracked.coffee}
                        onClick={() => setHabitsTracked({ ...habitsTracked, coffee: !habitsTracked.coffee })}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default HabbitToggleList
