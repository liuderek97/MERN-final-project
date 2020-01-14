const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');
const bcrypt = require('bcryptjs');

const register = (req, res) =>
{
    let { username, email, password, password2, firstName, lastName } = req.body;

    if (password !== password2) res.status(500).send("{errors: \"Passwords don't match\"}").end()

    let newUser = new User({ username, email, password, firstName, lastName });

    bcrypt.genSalt(10, (err, salt) =>
    {
        bcrypt.hash(newUser.password, salt, (err, hash) =>
        {
            newUser.password = hash;
            newUser.save()
                .then(user => res.send(user).end())
                .catch(err => console.log(err))
        });
    });            
}

const logout = (req, res) =>
{
    try
    {
        req.logout();
        res.status(200).send("Logged out");
    }
    catch (err) {
        res.status(500).send(err)
    }
};

const login = (req, res, next) =>
{
    passport.authenticate('local', (err, user) => 
    {
        if (err) return next(err) 

        if (!user) return res.status(401).send({ success : false, message : 'authentication failed' });

        req.login(user, loginErr => 
        {
            if (loginErr) return next(loginErr);
            return res.send({ success : true, message : 'authentication succeeded' });
        });      
    })(req, res, next);
}

const user = (req, res) => res.status(200).json({ success: true, user: req.user})

module.exports = {
    login,
    logout,
    register,
    user
};
