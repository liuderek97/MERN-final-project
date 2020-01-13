const express  = require('express');
const router = express.Router();
const AuthController = require("../controllers/auth");
const { isLoggedIn } = require('../helpers/roles');

router.post('/login', AuthController.login);
router.get('/logout',  AuthController.logout);

module.exports = router;