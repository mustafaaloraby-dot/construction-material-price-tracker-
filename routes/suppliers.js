const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Ezz Steel', website: 'https://ezzsteel.com' },
    { id: 2, name: 'Suez Cement', website: 'https://heidelbergmaterials.com' }
  ]);
});

module.exports = router;
