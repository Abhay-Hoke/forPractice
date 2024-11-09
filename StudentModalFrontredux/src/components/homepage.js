// LandingPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoleDropdown from './RoleDropdown';
import AddStudentButton from './AddStudentButton.js';
import { fetchStudents } from '../redux/actions.js';
import StudentTable from './studentTable';

const homepage = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div>
      <RoleDropdown />
      <AddStudentButton />
      <StudentTable students={students} />
    </div>
  );
};

export default homepage;
