// modalReducer.js
import { OPEN_STUDENT_MODAL, CLOSE_STUDENT_MODAL } from '../actions';

const initialState = {
  student: null,
  isOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_STUDENT_MODAL:
      return {
        student: action.payload,
        isOpen: true,
      };
    case CLOSE_STUDENT_MODAL:
      return {
        student: null,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
