const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController')
const authController = require('../controllers/authController')


router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.get('/signup', authController.getSignup)

module.exports = router