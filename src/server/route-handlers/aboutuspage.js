import React from 'react';
import ReactDOMServer from 'react-dom/server';

import AboutPage from '../../common/pages/AboutPage/AboutPage';

const aboutUsPageRouteHandler = (req, res) => {
  const state = { 
    headerMessage: "Header Message text for about-us page"
  }
  const render = ReactDOMServer.renderToString(
    <AboutPage headerMessage={state.headerMessage} />
  );
  
  res.locals.pageType = 'about-page';
  res.locals.state = JSON.stringify(state);
  res.locals.render = render;
  res.render('template');
};

export default aboutUsPageRouteHandler;
