// roleReducer.js
import { SET_USER_ROLE } from '../actions';

const initialState = 'Admin';

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ROLE:
      return action.payload;
    default:
      return state;
  }
};

export default roleReducer;
