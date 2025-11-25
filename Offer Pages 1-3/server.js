const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for Offer1
app.get('/offer1', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer1', 'index.html'));
});

app.get('/offer1/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer1', 'page2.html'));
});

// Route for Offer2
app.get('/offer2', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer2', 'index.html'));
});

app.get('/offer2/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer2', 'page2.html'));
});

// Route for Offer3
app.get('/offer3', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer3', 'index.html'));
});

app.get('/offer3/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'Offer3', 'page2.html'));
});

// Default route - redirect to offer1
app.get('/', (req, res) => {
  res.redirect('/offer1');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Offer 1: http://localhost:${PORT}/offer1`);
  console.log(`Offer 2: http://localhost:${PORT}/offer2`);
  console.log(`Offer 3: http://localhost:${PORT}/offer3`);
});
