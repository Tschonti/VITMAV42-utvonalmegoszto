//const requireOption = require('../requireOption');

/**
 * Gets all the efforts that belong to res.locals.route, ordered by time in ascending order and stores them in res.locals, separately by sport.
 * @param {*} objectrepository
 * @returns
 */
module.exports = objectrepository => {
    return (req, res, next) => {
        res.locals.title = "Útvonalmegosztó - " + res.locals.route.name
        res.locals.efforts = {
            running: [
                {
                    id: 3,
                    name: "Nagy Endre",
                    time: "00:42:37"
                },
                {
                    id: 4,
                    name: "Horváth Eszter",
                    time: "00:45:11"
                },
                {
                    id: 5,
                    name: "Dalai Láma",
                    time: "01:06:02"
                }
            ],
            cycling: [],
            hiking: [
            {
                id: 1,
                name: "Fekete Sámuel",
                time: "3:15:00"
            },
            {
                id: 2,
                name: "Kovács István",
                time: "5:47:22"
            }]
        }
        return next();
    };
};