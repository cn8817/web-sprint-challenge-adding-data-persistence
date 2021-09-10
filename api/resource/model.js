// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function getAll() {
    return db('resources')
}

function postNew(resources) {
    return db('resources').insert(resources)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
    })
}

module.exports = {
    getAll,
    postNew,
}