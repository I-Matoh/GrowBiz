const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/transactions
router.get('/', (req, res) => {
  const transactions = db.getAllTransactions();
  res.json(transactions);
});

// POST /api/transactions
router.post('/', (req, res) => {
  const { description, amount, category, type, date } = req.body;
  if (!description || !amount || !category || !type || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newTransaction = db.addTransaction({ description, amount, category, type, date });
  res.status(201).json(newTransaction);
});

// DELETE /api/transactions/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'Invalid ID' });

  const success = db.deleteTransaction(id);
  if (!success) return res.status(404).json({ error: 'Transaction not found' });

  res.status(204).end();
});

module.exports = router;
