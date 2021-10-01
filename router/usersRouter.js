//external imports
const express = require('express');
const decorateHtmlResponsive = require(
    '../middlewares/common/decorateHtmlResponsive'
);

// internal imports
const { getUsers } = require('../controller/usersController');

const router = express.Router();

router.get('/', decorateHtmlResponsive('Users'), getUsers);



module.exports = router;



