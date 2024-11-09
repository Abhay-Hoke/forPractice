// BasicInfo.js
import React from 'react';
import Form from 'react-bootstrap/Form';

const BasicInfo = ({ student, setStudent, disabled }) => {
  return (
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={student.firstName}
          onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
          disabled={disabled}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={student.lastName}
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
          disabled={disabled}
        />
      </Form.Group>
      <Form.Group controlId="dateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={student.dateOfBirth}
          onChange={(e) => setStudent({ ...student, dateOfBirth: e.target.value })}
          disabled={disabled}
        />
      </Form.Group>
    </Form>
  );
};

export default BasicInfo;
