import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fetch from 'node-fetch';

import HomePage from '../../common/pages/HomePage/HomePage';

const homePageRouteHandler = (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(data => {
      const state = { 
        headerMessage: data[0].title
      };
      const render = ReactDOMServer.renderToString(
          <HomePage headerMessage={state.headerMessage} />
      );
    
      res.locals.pageType = 'home-page';
      res.locals.state = JSON.stringify(state);
      res.locals.render = render;
      res.render('template');
    }).catch((error) => {
      res.end();
    });
};

export default homePageRouteHandler;
