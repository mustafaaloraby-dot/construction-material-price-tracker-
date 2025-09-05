const express = require('express');
const router = express.Router();
const { scrapePrices, getPriceHistory, comparePrices } = require('../services/scraper');

router.get('/', async (req, res) => {
  const prices = await scrapePrices();
  res.json(prices);
});

router.get('/:id/history', async (req, res) => {
  const history = await getPriceHistory(req.params.id);
  res.json(history);
});

router.post('/compare', async (req, res) => {
  const comparison = await comparePrices(req.body.materialType);
  res.json(comparison);
});

module.exports = router;
