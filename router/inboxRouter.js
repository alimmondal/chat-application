//external imports
const express = require('express');
const decorateHtmlResponsive = require(
    '../middlewares/common/decorateHtmlResponsive'
);

// internal imports
const { getInbox } = require('../controller/inboxController');

const router = express.Router();

// inbox page
router.get('/', decorateHtmlResponsive('Inbox'), getInbox);



module.exports = router;



