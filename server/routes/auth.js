const express  = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require("../controllers/auth");
const { isUser, isGuest } = require('../helpers/roles');


app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) { res.redirect('/'); });
router.get('/google', isGuest, passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), AuthController.verify);

router.get('/logout', isUser,  AuthController.logout);

module.exports = router;