//const requireOption = require('../requireOption');

/**
 * Deletes the route in res.locals.route. Redirects to '/'
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        return next();
    };
};