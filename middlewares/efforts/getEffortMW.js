//const requireOption = require('../requireOption');

/**
 * Gets the effort with id=:effort_id and stores it in res.locals.effort
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        res.locals.effort = {
            id: 1
        }
        return next();
    };
};