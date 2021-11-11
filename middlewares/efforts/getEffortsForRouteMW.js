//const requireOption = require('../requireOption');

/**
 * Gets all the efforts that belong to res.locals.route, ordered by time in ascending order and stores them in res.locals, separately by sport.
 * @param {*} or
 * @returns
 */
module.exports = or => {
    return (req, res, next) => {
        res.locals.title = "Útvonalmegosztó - " + res.locals.route.name
        return or.EffortModel.find({ _route: res.locals.route._id }).sort({ time: 'asc'}).exec((err, efforts) => {
            if (err) {
                return next(err)
            }
            efforts.forEach(effort => {
                const hours = parseInt(effort.time / 3600)
                const mins = parseInt((effort.time - hours*3600) / 60)
                const secs = effort.time - hours*3600 - mins*60
                effort.time = `${(hours+'').padStart(2, '0')}:${(mins+'').padStart(2, '0')}:${(secs+'').padStart(2, '0')}`;
                //console.log(`${(hours+'').padStart(2, '0')}:${(mins+'').padStart(2, '0')}:${(secs+'').padStart(2, '0')}`)
            })
            res.locals.efforts = {}
            res.locals.efforts.hiking = efforts.filter(effort => effort.type === 1)
            res.locals.efforts.running = efforts.filter(effort => effort.type === 2)
            res.locals.efforts.cycling = efforts.filter(effort => effort.type === 3)
            return next();
        })
    };
};