// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try{
        const insert = await Task.createTask(req.body)
        res.status(201).json(insert)
    } catch(err) {
        next(err)
    }
})

module.exports = router