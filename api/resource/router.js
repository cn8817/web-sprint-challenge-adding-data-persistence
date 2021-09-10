// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const resources = await Resource.getAll()
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const insert = await Resource.postNew(req.body)
        res.status(201).json(insert)
    } catch(err) {
        next(err)
    }
})

module.exports = router