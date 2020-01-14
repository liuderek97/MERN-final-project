const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcryptjs');

module.exports = passport =>
{
    passport.use(new LocalStrategy(
        (username, password, done) => 
        {
            User.findOne({ username }, (err, user) =>
            {
                if (err) return done(err);

                if (!user) return done(null, false, { message: 'Unknown User' });
    
                bcrypt.compare(password, user.password, (err, isMatch) =>
                {
                    if (isMatch) return done(null, user);
                    if (!isMatch) return done(null, false, { message: 'Incorrect password' });
                });
            });
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));
};