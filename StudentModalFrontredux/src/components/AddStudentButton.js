// AddStudentButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddStudentModal } from '../redux/actions';
import Button from 'react-bootstrap/Button';

const AddStudentButton = () => {
  const dispatch = useDispatch();

  const handleAddStudent = () => {
    dispatch(openAddStudentModal());
  };

  return (
    <Button variant="success" onClick={handleAddStudent}>
      Add New Student
    </Button>
  );
};

export default AddStudentButton;
