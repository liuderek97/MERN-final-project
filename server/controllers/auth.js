const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcryptjs');

const register = (req, res) =>
{
    let { password, password2 } = req.body;
    if (password === password2)
    {
        let { username, email, password, firstName, lastName } = req.body;
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
    else
    {
        res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }    
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
