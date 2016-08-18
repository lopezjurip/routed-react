// server/app.js
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Secure your Express apps by setting various HTTP headers
app.use(helmet());
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
