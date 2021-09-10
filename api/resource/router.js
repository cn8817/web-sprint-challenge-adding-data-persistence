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

router.post('/', (req, res, next) => {
    const resources = req.body

    Resource.postNew(resources)
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(next)
})

module.exports = router