// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.getAll()
        res.status(200).json(projects)
    } catch(err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const projects = req.body

    Project.postNew(projects)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(next)
})

module.exports = router