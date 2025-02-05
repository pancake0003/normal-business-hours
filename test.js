const express = require('express');
const path = require('path');
const { createServer } = require('@vercel/node');
const app = express();
// const port = 3000;

// in middleware, the order matters...
// check the hour first!
app.use(workingHours);
// serving our static files like always
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Server listening at http://localhost:3000');
});

// our custom middleware function
function workingHours(req, res, next) {

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const normalBusinessHours = {
    // 24 hour time
    open: 11,
    close: 3,
  };

  if (currentHour >= normalBusinessHours.open ||
    currentHour <= normalBusinessHours.close) {
    console.log('Open!');
    // req.url = 'public/Yuemeng_Song_Resume.pdf';
    res.sendFile(path.join(__dirname, 'public', 'Yuemeng_Song_Resume.pdf'));
    // next();
  } 
  else {
    // req.url = 'denied.html';
    res.sendFile(path.join(__dirname, 'public', 'denied.html'));
    // next();
  }
}

app.use(workingHours);
app.use(express.static('public'));
module.exports = app;