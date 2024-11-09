import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import StudentModal from './components/StudentModal';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/homepage';




const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* Route for modal - you may want this only as a popup or conditional */}
          <Route path="/student/:id" element={<StudentModal />} />
          {/* Additional routes can be added here */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './components/landingScreens/HomePage';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<HomePage/>}/>
      

//       </Routes>
// </BrowserRouter>
    
//   );
// }

// export default App;
// App.js
