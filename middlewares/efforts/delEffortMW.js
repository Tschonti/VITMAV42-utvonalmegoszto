//const requireOption = require('../requireOption');

/**
 * Deletes the effort in res.locals.effort and returns a JSON indicating success or failure.
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        return res.redirect(`/routes/show/${res.locals.effort.id}`);
    };
};