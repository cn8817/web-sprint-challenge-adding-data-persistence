// build your `Project` model here
const db = require('../../data/dbConfig.js')
const { get } = require('./router.js')

function getAll() {
    return db('projects')
}

function postNew(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => get(id))
}

module.exports = {
    getAll,
    postNew,
}