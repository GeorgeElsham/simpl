const express = require('express');
const { EventService } = require('../../database/services');
const router = express.Router();

router.get('/all', async (req, res) => {
  // Cookie logic
  res.status(200).json({
    success: true,
    data: await EventService.getAll(),
  });
});

module.exports = router;
