const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');
const statisticsRoutes = require('./routes/statistics');
const barchartRoutes = require('./routes/barchart');
// const piechartRoutes = require('./routes/piechart');
const combinedRoutes = require('./routes/combined');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
const uri = 'mongodb+srv://gudun28032000:nIGYmHxflZs2GgYq@cluster0.ucjwfxj.mongodb.net/'
 mongoose.connect(uri)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Your code here after successful connection
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/barchart', barchartRoutes);
// app.use('/api/piechart', piechartRoutes);
app.use('/api/combined', combinedRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
