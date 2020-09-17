import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import HelloStudent from './components/HelloStudent';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>React Git Branch Merge Practice</h1>
    <HelloWorld />
    <HelloStudent name="Kenji"/>
  </React.StrictMode>,
  document.getElementById('root')
);

