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

router.post('/', async (req, res, next) => {
    try{
        const insert = await Project.postNew(req.body)
        res.status(201).json(insert)
    } catch(err) {
        next(err)
    }
})

module.exports = router