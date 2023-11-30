const express = require('express');
const app = express();
const connectDB = require('./config/database');
const userRoutes = require('./app/routes/userRoutes');
const port = 8080;
// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});