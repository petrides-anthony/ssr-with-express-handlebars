import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../common/pages/AboutPage/AboutPage';

ReactDOM.hydrate(
    <AboutPage 
      headerMessage={window.__STATE__.headerMessage}
    />,
  document.getElementById('root')
);