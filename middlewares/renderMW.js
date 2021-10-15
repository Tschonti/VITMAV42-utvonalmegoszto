const path = require('path');

/**
 * For now it just renders the html file it gets as a parameter, it'll eventually render a template.
 * @param {*} fileName
 * @returns
 */
module.exports = fileName => {
    return (req, res) => {
        res.sendFile(path.resolve('/static/' + fileName), options={root: process.cwd()})
    }
}