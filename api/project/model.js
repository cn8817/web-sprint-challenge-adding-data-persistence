// build your `Project` model here
const db = require('../../data/dbConfig.js')

function getAll() {
    return db('projects')
}

async function postNew(project) {
    const [project_id] = await db('projects').insert(project)
    return getAll().where({ project_id }).first()
}

module.exports = {
    getAll,
    postNew,
}