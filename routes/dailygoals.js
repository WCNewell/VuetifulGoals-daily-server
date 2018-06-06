const express = require('express')
const router = express.Router()

const Dailies = require('../models/dailies')

// List
router.get('/', (request, response, next) => {
    Dalies.list().then(dailygoals => {
        response.status(200).json({ dailygoals })
    }).catch(next)
})
//next catches the errors and throws them over to the
//error handlers in app.js

// Read
router.get('/:id', (request, response, next) => {
    Dailies.read(request.params.id).then(dailygoal => {
        response.status(200).json({ dailygoal })
    }).catch(next)
})
// Create
router.post('/', (request, response, next) => {
    Dailies.create(request.body.dailygoal).then(dailygoal => {
        response.status(201).json({ dailygoal })
    }).catch(next)
})
// Update
router.put('/:id', (request, response, next) => {
    Dailies.update(request.params.id, request.body.dailygoal).then(dailygoal => {
        response.status(201).json({ dailygoal })
    }).catch(next)
})
// Delete
router.delete('/:id', (request, response, next) => {
    Dailies.remove(request.params.id).then(() => {
        response.status(204).json({})
    }).catch(next)
})

module.exports = router
