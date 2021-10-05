//external imports
const express = require('express');
// internal imports
const {
    getUsers,
    addUser,
    removeUser
} = require('../controller/usersController');

const decorateHtmlResponsive = require(
    '../middlewares/common/decorateHtmlResponsive'
);



const avatarUpload = require('../middlewares/users/avatarUpload');
const {
    addUserValidators,
    addUserValidationHandler
} = require('../middlewares/users/userValidator');


const router = express.Router();

router.get('/', decorateHtmlResponsive("Users"), getUsers);

// add user 
router.post(
    '/',
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
);

// remove user 
router.delete("/:id", removeUser);


module.exports = router;



