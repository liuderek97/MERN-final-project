const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = function (passport)
{
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleAuth.clientID,
            clientSecret: keys.googleAuth.clientSecret,
            callbackURL: keys.googleAuth.callbackURL,
            proxy: true
        }, (access, refresh, profile, done) =>
        {        
            User.findOne({
                googleID: profile.id
            })
            .then(user =>
            {
                if (user)
                {
                    done(null, user);
                } else
                {
                    const newUser = {
                        googleID: profile.id,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value
                    };

                    new User(newUser)
                    .save()
                    .then(user => done(null, user));
                }
            });
        })
    );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => User.findById(id).then(user =>
    {
        done(null, user)
    }));
};
