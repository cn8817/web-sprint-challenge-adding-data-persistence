// build your `Project` model here
const db = require('../../data/dbConfig.js')

function getAll() {
    return db('projects')
}

function postNew(projects) {
    return db('projects').insert(projects)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })
}

module.exports = {
    getAll,
    postNew,
}