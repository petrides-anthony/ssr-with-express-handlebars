import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import chalk from 'chalk';

// Route Handlers
import homePageRouteHandler from './route-handlers/homepage';
import aboutUsPageRouteHandler from './route-handlers/aboutuspage';

// Middlewares
import logRequestResponseInfo from './middlewares/logging/logRequestResponseInfo';

const app = express();

app.engine('hbs', exphbs({
  defaultLayout: false,
  extname: '.hbs'
}));

// handlebars views and asset setup
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../server/views'));
app.use('/public', express.static(path.resolve(__dirname, '../../public')));

// global middleware calls
app.use(logRequestResponseInfo({
  showColouredLogs: true,
}));

// routes
app.get('/', homePageRouteHandler);
app.get('/about-us', aboutUsPageRouteHandler);

app.listen(3010, () => {
  console.log(`The web server has started on port 3010 - visit ${chalk.bgGreen('http://localhost:3010/')}`)
});