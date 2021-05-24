const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const fetch = require('node-fetch');
const chalk = require('chalk');

const HomePage = require('../common/pages/HomePage/HomePage').default;
const AboutPage = require('../common/pages/AboutPage/AboutPage').default;

// Middlewares
const logRequestResponseInfo = require('./middlewares/logging/logRequestResponseInfo').default;

const app = express();

app.engine('hbs', exphbs({
  defaultLayout: false,
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../server/views'));
app.use('/public', express.static(path.resolve(__dirname, '../../public')));

// global middleware call
app.use(logRequestResponseInfo({
  showColouredLogs: true,
}));

app.get('/', (req, res) => {
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
});

app.get('/about-us', (req, res) => {
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
});

app.listen(3010, () => {
  console.log(`The web server has started on port 3010 - visit ${chalk.bgGreen('http://localhost:3010/')}`)
});