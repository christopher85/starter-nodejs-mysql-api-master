

const express = require("express")
,     router = express.Router()
,     authController = require('../controllers/authController');

router.post('/register', authController.postAuthRegister);

module.exports = router;