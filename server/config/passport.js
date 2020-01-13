const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (passport) =>
{
    passport.use(new LocalStrategy(
        (username, password, done) =>
        {
            User.findOne({ username }, (err, user) => 
            {
                if (err) return done(err);
                if (!user) return done(null, false);
                if (!user.authenticate(password)) return done(null, false);
                return done(null, user);
            });
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => User.findOne({ _id: id },
    '-password -salt', () =>
    {
        done(err, user)
    }));
};
