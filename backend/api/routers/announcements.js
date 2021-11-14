const express = require('express');
const { AnnouncementService } = require('../../database/services');
const router = express.Router();

router.get('/all', async (req, res) => {
  // Cookie logic
  res.status(200).json({
    success: true,
    data: await AnnouncementService.getAll(),
  });
});

module.exports = router;
