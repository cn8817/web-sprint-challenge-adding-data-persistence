// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function getAll() {
    return db('resources')
}

async function postNew(resource) {
    const [resource_id] = await db('projects').insert(resource)
    return getAll().where({ resource_id }).first()
}

module.exports = {
    getAll,
    postNew,
}