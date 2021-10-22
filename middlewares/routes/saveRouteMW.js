//const requireOption = require('../requireOption');

/**
 * If method is GET, it does nothing.
 * Otherwise it saves or updates a route with POST parameters. If res.locals.route exists, it's an update, otherwise it's creation.
 * If the params are okay, redirects to the newly created/updated route, otherwise stores errors in res.locals.errors.
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        if (req.method === "GET") {
            if (typeof(res.locals.route) !== 'undefined') {
                res.locals.title = "Útvonalmegosztó - Útvonal szerkesztése"
            } else {
                res.locals.title = "Útvonalmegosztó - Új útvonal"
            }
        } else {
            return res.redirect('/')
        }

        return next();
    };
};