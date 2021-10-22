//const requireOption = require('../requireOption');

/**
 * Gets the number of efforts for every route in res.locals.routes
 * @param {*} objectrepository
 * @returns
 */
 module.exports = objectrepository => {
    return (req, res, next) => {
        res.locals.title = "Útvonalmegosztó"
        return next();
    };
};