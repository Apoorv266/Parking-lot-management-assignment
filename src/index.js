import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParkingContextWrapper from './Contexts/parkingContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <ParkingContextWrapper>
    <App />
    </ParkingContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
