const express = require('express');
const router = express.Router();

const auth = require('../controllers/c-auth');

router.get('/users',auth.getAllUser);

module.exports = router;