// studentReducer.js
import { SET_STUDENTS } from '../actions';

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.payload;
    default:
      return state;
  }
};

export default studentReducer;
