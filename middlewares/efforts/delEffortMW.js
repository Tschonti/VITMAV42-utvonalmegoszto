//const requireOption = require('../requireOption');

/**
 * Deletes the effort in res.locals.effort and redirects to the route's page.
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        return res.redirect(`/routes/show/${res.locals.effort.id}`);
    };
};