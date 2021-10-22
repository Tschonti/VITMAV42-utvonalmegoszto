//const requireOption = require('../requireOption');

/**
 * Gets all the routes from the databse and stores it in res.locals.routes
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        res.locals.routes = [
            {
                id: 1,
                name: "Dobogó-kő túra",
                length: 7.96,
                elevation: 325,
                efforts: 5
            },
            {
                id: 2,
                name: "Gellért-hegyi kör",
                length: 4.3,
                elevation: 175,
                efforts: 3
            },
            {
                id: 3,
                name: "Szentendre és vissza",
                length: 55.3,
                elevation: 50,
                efforts: 1
            },
        ]
        return next();
    };
};