import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './reducers/studentReducer';
import roleReducer from './reducers/roleReducer';
import modalReducer from './reducers/modalReducer';


const store = configureStore({
    reducer: {
      students: studentReducer,
      userRole: roleReducer,
      modalData: modalReducer,
    },
  });

export default store;