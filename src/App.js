import React, { useState, useEffect } from 'react';

//BootStrap
import { Container, Row, Col } from 'react-bootstrap'

//Components
import Calendar from './Components/Calendar/Calendar';
import InputPanel from './Components/InputPanel/InputPanel';
import './App.css';


import useForm from './Hooks/useForm'

const App = () => {

  const { handleChange, formData, setFormData } = useForm();
  const [update, forceUpdate] = useState(false);


  const loadData = (num) => {

  }


  const saveData = () => {

  }


  useEffect(() => {




  }, [])

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <InputPanel saveData={saveData} forceUpdate={forceUpdate} update={update} />
        <Calendar loadData={loadData} update={update} />
      </Row>
    </Container>
  );
}

export default App;
