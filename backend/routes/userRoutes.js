const express = require('express'); // require express dependency
const userController = require('../controllers/userController')
const router = express.Router();  // create new router

router.post('/login', userController.login_user)

router.post('/signup', userController.signup_user)

module.exports = router;  // export router