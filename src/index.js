import React from 'react';
import ReactDOM from 'react-dom';
import HelloStudent from './components/HelloStudent';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>My Git Test.</h1>
    <HelloStudent name="Kenji"/>
  </React.StrictMode>,
  document.getElementById('root')
);

