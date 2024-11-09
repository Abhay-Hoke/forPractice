// StudentModal.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { closeStudentModal, updateStudent } from '../redux/actions';
import BasicInfo from './BasicInfo';
import FamilyInfo from './FamilyInfo';

const StudentModal = () => {
  const dispatch = useDispatch();
  const { student, userRole } = useSelector((state) => state.modalData);

  const [editableStudent, setEditableStudent] = useState(student);

  const handleSubmit = () => {
    dispatch(updateStudent(editableStudent));
    dispatch(closeStudentModal());
  };

  if (!student) return null;

  return (
    <Modal show onHide={() => dispatch(closeStudentModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicInfo student={editableStudent} setStudent={setEditableStudent} disabled={userRole === 'Admin'} />
        <FamilyInfo familyMembers={editableStudent.familyMembers} setStudent={setEditableStudent} />
      </Modal.Body>
      <Modal.Footer>
        {userRole === 'Registrar' && (
          <>
            <Button variant="secondary" onClick={() => dispatch(closeStudentModal())}>Cancel</Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default StudentModal;
