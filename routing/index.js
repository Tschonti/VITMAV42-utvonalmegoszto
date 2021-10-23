const getRoutesMW = require('../middlewares/routes/getRoutesMW')
const getEffortCountMW = require('../middlewares/efforts/getEffortCountMW')
const saveRouteMW = require('../middlewares/routes/saveRouteMW')
const getRouteMW = require('../middlewares/routes/getRouteMW')
const getTitleMW = require('../middlewares/routes/getTitleMW')
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
        getTitleMW(),
        renderMW('new_edit')
    )

    app.use('/routes/edit/:route_id',
        getRouteMW(),
        saveRouteMW(),
        getTitleMW(),
        renderMW('new_edit')
    )

    app.get('/routes/del/:route_id',
        getRouteMW(),
        getEffortsForRouteMW(),
        delEffortsForRouteMW(),
        delRouteMW()    //redirects instead of rendering
    )

    app.get('/routes/show/:route_id',
        getRouteMW(),
        getEffortsForRouteMW(),
        renderMW('route')
    )

    app.post('/efforts/new',
        saveEffortMW()  //sends JSON instead of rendering
    )

    app.post('/efforts/edit/:effort_id',
        getEffortMW(),
        saveEffortMW()  //sends JSON instead of rendering
    )

    app.get('/efforts/del/:effort_id',
        getEffortMW(),
        delEffortMW()   //redirects instead of rendering
    )
}