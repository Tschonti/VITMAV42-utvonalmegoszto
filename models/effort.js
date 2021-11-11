const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Effort = db.model('Effort', {
    name: String,
    time: Number,
    type: Number,
    _route: {
        type: Schema.Types.ObjectId,
        ref: 'Route'
    }
});

module.exports = Effort;