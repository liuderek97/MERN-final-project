const express  = require('express');
const router = express.Router();
const AuthController = require("../controllers/auth");
const { isLoggedIn } = require('../helpers/roles');

router.post('/register', AuthController.register)
router.post('/login',    AuthController.login);
router.get('/logout',    AuthController.logout);
router.get('/user',      isLoggedIn, AuthController.user);

module.exports = router;