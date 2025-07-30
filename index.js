const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

// Optional root route
app.get("/", (req, res) => {
  res.send("API Home Page");
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connectToMongo();
