const express  = require('express');
const router = express.Router();
const AuthController = require("../controllers/auth");
const passport = require('passport');
const { isLoggedIn } = require('../helpers/roles');

router.post('/register', AuthController.register)

router.post('/login', passport.authenticate('local'), AuthController.login);

router.get('/logout', AuthController.logout);

router.get('/user',  AuthController.user);

module.exports = router;