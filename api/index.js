const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

function workingHours(req, res, next) {
  if (req.path === '/Yuemeng_Song_Resume.pdf') {
    console.log("Accessing resume: Allowed");
    return next();
  }

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const normalBusinessHours = {
    open: 15,
    close: 3,
  };

  if (currentHour >= normalBusinessHours.open || currentHour < normalBusinessHours.close) {
    console.log("Within business hours: Allowed");
    next();
  } else {
    console.log("Outside business hours: Redirecting to denied.html");
    res.sendFile(path.resolve('public', 'denied.html')); // Explicit absolute path
  }
}

// ✅ Serve static files correctly
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve index.html from root `/public`
app.get('/', (req, res) => {
  console.log("Serving index.html");
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Correct path
});

// ✅ API Test Route
app.get('/api', (req, res) => {
  console.log("API check successful");
  res.json({ message: 'API is working!' });
});

module.exports = app;
