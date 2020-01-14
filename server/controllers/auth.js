const mongoose = require('mongoose');
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
    req.logout();
    res.redirect('/');
};

const login = (req, res) => res.send(req.user);
const user = (req, res) => res.send(req.user);

module.exports = {
    login,
    logout,
    register,
    user
};
