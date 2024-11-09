// StudentTable.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { openStudentModal } from '../redux/actions';
import Table from 'react-bootstrap/Table';

const StudentTable = ({ students }) => {
  const dispatch = useDispatch();

  const handleRowClick = (student) => {
    dispatch(openStudentModal(student));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.ID} onClick={() => handleRowClick(student)}>
            <td>{student.ID}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{new Date(student.dateOfBirth).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;
