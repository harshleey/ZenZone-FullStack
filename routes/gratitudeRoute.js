const express = require("express");
const router = express.Router();
const gratitudeController = require('../controllers/gratitudeController')
const { ensureAuth, ensureGuest } = require("../middlewares/auth");


router.get('/', ensureAuth, gratitudeController.getGratitude)

module.exports = router