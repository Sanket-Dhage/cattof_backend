const express = require('express');
const { verifyCatoffActivity } = require('../integrations/catoff');

const router = express.Router();

router.post('/verify', async (req, res) => {
  const { activity } = req.body;

  try {
    const result = await verifyCatoffActivity(activity);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

