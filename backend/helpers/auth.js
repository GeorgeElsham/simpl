const cookieCache = new Map();

exports.checkAuth = (req, res, next) => {
    // List of routes not to check for cookies on
    const nonAuthRoutes = [
        '/',
        '/api/auth/sign-in',
        '/api/auth/sign-up',
        '/api/auth/sign-out',
    ]

    const incomingCookie = req.cookies['X-Auth-Simpl'];

    const storedCookie = cookieCache.get(incomingCookie)

    console.log(storedCookie, incomingCookie);

    // If we have cookie stored let them through
    if (nonAuthRoutes.includes(req.path) || (storedCookie && storedCookie > Date.now())) {
        if (storedCookie) {
            req.user = incomingCookie.split(':')[1]
        }
        next();
    }
    else {
        res.redirect('/');
    }
}
exports.cookieCache = cookieCache;