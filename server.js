const express = require('express');
const path = require('path');
const app = express();
const PORT = 2000;

// Serve static files from the "public" directory
//app.use(express.static('public'));

// Route to serve the HTML file
app.get('/sathishkumar', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public')));
  res.sendFile((path.join(__dirname, 'public','index.html')));
});
app.get('/', (req, res) => {
  res.write("Hello Sathishkumar,first");
  res.end();
});
/*
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})*/

app.listen(port)
