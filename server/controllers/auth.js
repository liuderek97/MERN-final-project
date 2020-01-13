const passport = require('passport');

const login = (req, res) =>
{
    console.log("Logging In");
    passport.authenticate('local', {
        failureRedirect: '/',
        successRedirect: '/admin'
    })
}

const logout = (req, res) =>
{
    console.log("Logging Out");
    req.logout();
    res.redirect('/');
};

module.exports = { login, logout };