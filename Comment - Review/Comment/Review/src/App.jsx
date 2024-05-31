import React from 'react';
import StudentForm from './Componets/StudentForm'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <h1>Student Registration Form</h1>
      <StudentForm />
    </Container>
  );
};

export default App;
