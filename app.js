const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send("App is running successfully!");
});

// Bind to all network interfaces
app.listen(8000, '0.0.0.0', () => {
  console.log('Server is running at port 8000');
});
