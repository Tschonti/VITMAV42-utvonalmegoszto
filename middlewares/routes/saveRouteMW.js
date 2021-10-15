//const requireOption = require('../requireOption');

/**
 * Saves or updates a route with POST parameters. If res.locals.route exists, it's an update, otherwise it's creation.
 * If the params are okay, redirects to the newly created/updated route, otherwise stores errors in res.locals.errors.
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        next();
    };
};