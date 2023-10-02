console.log('hello')
const express = require('express');
const app = express();
const port = 8081;

// Define a simple route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
