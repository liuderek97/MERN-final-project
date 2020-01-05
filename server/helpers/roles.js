const isAdmin = (req, res, next) =>
{
    if (req.user && req.user.admin) return next();
    res.redirect('/');
}

const isUser = (req, res, next) =>
{
    if (req.user) return next();
    res.redirect('/');
}

const isGuest = (req, res, next) =>
{
    if (!req.user) return next();
    res.redirect('/');
}

module.exports = { isAdmin, isUser, isGuest };
