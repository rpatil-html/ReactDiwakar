import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const StudentForm = () => {
  const [formData, setFormData]=useState({
    fullName: '',
    email: '',
    password: '',
    grade: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGrade">
        <Form.Label>Grade</Form.Label>
        <Form.Control
          as="select"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        >
          <option value="">Select grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default StudentForm;
