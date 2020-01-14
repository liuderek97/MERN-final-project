const isLoggedIn = (req, res, next) =>
{
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

const isGuest = (req, res, next) =>
{
    if (!req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = { isLoggedIn, isGuest };
