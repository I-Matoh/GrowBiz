const express = require('express');
const cors = require('cors');
const path = require('path');
const transactionsRouter = require('./routes/transactions');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for development
app.use(cors());

app.use(express.json()); 

// API routes
app.use('/api/transactions', transactionsRouter);

// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
