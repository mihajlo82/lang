const express = require('express')
const router = express.Router();
const data = require('../data/data');

router.get('/', (req, res) => res.send(data));

module.exports = router;