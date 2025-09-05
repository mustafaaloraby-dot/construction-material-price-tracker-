const express = require('express');
const router = express.Router();

router.post('/subscribe', (req, res) => {
  res.json({ status: 'subscribed' });
});

module.exports = router;
