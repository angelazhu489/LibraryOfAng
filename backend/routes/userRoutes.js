import express from 'express'; // require express dependency
import { userController } from '../controllers/userController.js'

export const userRoutes = express.Router();  // create new router

userRoutes.post('/login', userController.login_user)

userRoutes.post('/signup', userController.signup_user)

// module.exports = router;  // export router