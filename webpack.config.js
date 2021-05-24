// To ensure paths are resolved properly across operating systems
// we use the 'path' module to resolve them
const path = require('path');

module.exports = {
  // 1
  // Use the src/index.js file as entry point to bundle it. 
  // If the src/index.js file imports other JavaScript files, bundle them as well.
  // Also includes a rule to tell babel to load and run on all .js files excluding
  // node_modules
  entry: {
    'home-page': path.resolve(__dirname, './src/client/home-page.js'),
    'about-page': path.resolve(__dirname, './src/client/about-page.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  // 2
  // The bundled source code files shall result in a [name].js file in the /public folder
  // per each item in the entry object further above.
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js'
  },
  // 3
  // The /public folder will be used to serve our application to the browser.
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  }
};