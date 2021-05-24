const chalk = require('chalk');
const moment = require('moment');

export default function logRequestResponseInfo({ showColouredLogs }) {
  const date_time = moment(Date.now());
  const unformattedLogs = (logMessage) => logMessage;

  const redBold = showColouredLogs ? chalk.red.bold : unformattedLogs;
  const yellow = showColouredLogs ? chalk.yellow : unformattedLogs;
  const bgMagenta = showColouredLogs ? chalk.bgMagenta : unformattedLogs;

  return (req, res, next) => {
    res.on('finish', function() {
      let status = res.statusCode;

      let pageType = undefined;

      switch (req.originalUrl) {
        case '/':
          pageType = 'Home Page';
          break;
        case '/about-us':
          pageType = 'About Us';
          break;
        default:
          pageType = undefined;
      }

      console.log(`Are logs being formatted? ${showColouredLogs ? 'Yes' : 'No'}`);
      console.log(`${yellow('********')}`)
      console.log(`- Page Type: ${bgMagenta(pageType)}`);
      console.log(`- Request Time: ${yellow(date_time)}`);
      console.log(`- Request Path: ${yellow(req.originalUrl)}`);
      console.log(`- Request Type: ${redBold(req.method)}`);
      console.log(`- Response Status: ${redBold(status)}`);
      console.log(`${yellow('********')}`)
    });
    next();
  };
};



