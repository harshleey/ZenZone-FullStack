const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController')
const authController = require('../controllers/authController')
const profileController = require('../controllers/profileController')
const { ensureAuth, ensureGuest } = require("../middlewares/auth");


router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)
router.get('/profile', ensureAuth, profileController.getProfile)

module.exports = router