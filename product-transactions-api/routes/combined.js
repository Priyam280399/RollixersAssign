const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/combined', async (req, res) => {
  const { month } = req.query;

  if (!month) {
    return res.status(400).send('Month is required');
  }

  try {
    const [transactions, statistics, barchart, piechart] = await Promise.all([
      axios.get(`http://localhost:3000/api/transactions?month=${month}`),
      axios.get(`http://localhost:3000/api/statistics?month=${month}`),
      axios.get(`http://localhost:3000/api/barchart?month=${month}`),
      axios.get(`http://localhost:3000/api/piechart?month=${month}`)
    ]);

    res.json({
      transactions: transactions.data,
      statistics: statistics.data,
      barchart: barchart.data,
      piechart: piechart.data
    });
  } catch (error) {
    res.status(500).send('Error fetching combined data: ' + error.message);
  }
});

module.exports = router;
