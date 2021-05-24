import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../common/pages/HomePage/HomePage';

ReactDOM.hydrate(
    <HomePage headerMessage={window.__STATE__.headerMessage} />,
  document.getElementById('root')
);