import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';

//import App from './App';
//import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>,
      
  document.getElementById('root')
);
