import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />                                        {/*  The whole app is rendered in the root element div, the whole website starts from here*/}
  </React.StrictMode>
);
