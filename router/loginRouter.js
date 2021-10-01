//external imports
const express = require('express');
const decorateHtmlResponsive = require(
    '../middlewares/common/decorateHtmlResponsive'
);

// internal imports
const { getLogin } = require('../controller/loginController');

const router = express.Router();

router.get('/', decorateHtmlResponsive('Login'), getLogin);



module.exports = router;



