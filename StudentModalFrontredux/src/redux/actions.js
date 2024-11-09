// actions.js
import axios from 'axios';

// Action types
export const SET_STUDENTS = 'SET_STUDENTS';
export const SET_USER_ROLE = 'SET_USER_ROLE';
export const OPEN_STUDENT_MODAL = 'OPEN_STUDENT_MODAL';
export const CLOSE_STUDENT_MODAL = 'CLOSE_STUDENT_MODAL';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const OPEN_ADD_STUDENT_MODAL = 'OPEN_ADD_STUDENT_MODAL';



// Synchronous actions
export const setStudents = (students) => ({ type: SET_STUDENTS, payload: students });
export const setUserRole = (role) => ({ type: SET_USER_ROLE, payload: role });
export const openStudentModal = (student) => ({ type: OPEN_STUDENT_MODAL, payload: student });
export const closeStudentModal = () => ({ type: CLOSE_STUDENT_MODAL });
export const openAddStudentModal = () => ({ type: OPEN_ADD_STUDENT_MODAL });

// Async actions (thunks)
export const fetchStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/Students');
    dispatch(setStudents(response.data));
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.post('/api/Students', student);
    dispatch(fetchStudents()); // Refresh the list of students
  } catch (error) {
    console.error("Failed to add student:", error);
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/Students/${student.ID}`, student);
    dispatch(fetchStudents()); // Refresh the list of students
    dispatch(closeStudentModal());
  } catch (error) {
    console.error("Failed to update student:", error);
  }
};
