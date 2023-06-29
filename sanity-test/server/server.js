const express = require('express');
const cors = require('cors');

const app = express();

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:3000/', // Replace with your client's domain
  credentials: true, // Allow credentials to be sent
}));

// Define your API routes
app.get('/api/data', (req, res) => {
  // Handle your API logic here
  res.json({ message: 'API response' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
