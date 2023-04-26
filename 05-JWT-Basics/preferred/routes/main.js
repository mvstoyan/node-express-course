const express = require('express');
const router = express.Router();
const path = require('path');

const { logon, hello } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/hello', authMiddleware, hello);
router.post('/logon', logon);

module.exports = router;