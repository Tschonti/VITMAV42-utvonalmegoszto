//const requireOption = require('../requireOption');

/**
 * Gets the route with id=:route_id and stores it in res.locals.route
 * @param {*} objectrepository
 * @returns
 */
 module.exports = objectrepository => {
    return (req, res, next) => {
        res.locals.route = {
                id: 1,
                name: "Dobogó-kő túra",
                length: 7.96,
                elevation: 325,
                link: "https://www.strava.com/routes/2872918524354908336"
            }
        return next();
    };
};