const getRoutesMW = require('../middlewares/routes/getRoutesMW')
const getEffortCountMW = require('../middlewares/efforts/getEffortCountMW')
const saveRouteMW = require('../middlewares/routes/saveRouteMW')
const getRouteMW = require('../middlewares/routes/getRouteMW')
const delRouteMW = require('../middlewares/routes/delRouteMW')
const getEffortMW = require('../middlewares/efforts/getEffortMW')
const getEffortsForRouteMW = require('../middlewares/efforts/getEffortsForRouteMW')
const delEffortsForRouteMW = require('../middlewares/efforts/delEffortsForRouteMW')
const saveEffortMW = require('../middlewares/efforts/saveEffortMW')
const delEffortMW = require('../middlewares/efforts/delEffortMW')
const renderMW = require('../middlewares/renderMW')

module.exports = app => {
    app.get('/',
        getRoutesMW(),
        getEffortCountMW(),
        renderMW('index')
    )

    app.use('/routes/new',
        saveRouteMW(),
        renderMW('new_edit')
    )

    app.use('/routes/edit/:route_id',
        getRouteMW(),
        saveRouteMW(),
        renderMW('new_edit')
    )

    app.get('/routes/del/:route_id',
        getRouteMW(),
        getEffortsForRouteMW(),
        delEffortsForRouteMW(),
        delRouteMW()
    )

    app.get('/routes/show/:route_id',
        getRouteMW(),
        getEffortsForRouteMW(),
        renderMW('route')
    )

    app.post('/efforts/new',
        saveEffortMW()
    )

    app.post('/efforts/edit/:effort_id',
        getEffortMW(),
        saveEffortMW()
    )

    app.get('/efforts/del/:effort_id',
        getEffortMW(),
        delEffortMW()
    )
}