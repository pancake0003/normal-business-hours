const express = require('express');
const path = require('path');

const app = express();

function workingHours(req, res, next) {
  if (req.path === '/Yuemeng_Song_Resume.pdf') {
    return next();
  }

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const normalBusinessHours = {
    open: 11,
    close: 3,
  };

  if (currentHour >= normalBusinessHours.open || currentHour < normalBusinessHours.close) {
    console.log('Open!');
    next();
  } else {
    console.log('Closed 🔒');
    res.sendFile(path.join(__dirname, '../public', 'denied.html'));
  }
}

app.use(workingHours);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
