//external imports
const express = require('express');
const decorateHtmlResponsive = require(
    '../middlewares/common/decorateHtmlResponsive'
);

// internal imports
const { getLogin, login } = require('../controller/loginController');

const router = express.Router();

router.get('/', decorateHtmlResponsive('Login'), getLogin);

// process login
router.post("/", login);

module.exports = router;



