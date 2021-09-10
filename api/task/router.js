// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const tasks = await Task.getAll()
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const insert = await Task.postNew(req.body)
        res.status(201).json(insert)
    } catch(err) {
        next(err)
    }
})

module.exports = router