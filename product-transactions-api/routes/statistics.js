const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions');


// API for statistics
router.get('/statistics', async (req, res) => {
  const { month } = req.query;

  const transactions = await Transaction.find({
    dateOfSale: { $regex: `-${month.padStart(2, '0')}-`, $options: 'i' },
  });

  const totalSaleAmount = transactions.reduce((acc, transaction) => acc + transaction.price, 0);
  const totalSoldItems = transactions.filter(transaction => transaction.sold).length;
  const totalNotSoldItems = transactions.filter(transaction => !transaction.sold).length;

  res.status(200).send({
    totalSaleAmount,
    totalSoldItems,
    totalNotSoldItems,
  });
});
module.exports = router;
