const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();
const controller = new Controller();

router.get('/', controller.index);

module.exports = router;