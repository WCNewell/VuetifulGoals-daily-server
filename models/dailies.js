const database = require('../connection.js')

function list() {
    return database('dailygoal').select()
}

function read(id) {
    return database('dailygoal')
        .select()
        .where('id', id)
        .first()
}

function create(dailygoal) {
    return database('dailygoal')
        .insert(dailygoal)
        .returning('*')
        .then(dailygoals => dailygoals[0])
}

function update(id, dailygoal) {
    return database('dailygoal')
        .update(dailygoal)
        .where('id', id)
        .returning('*')
        .then(dailygoals => dailygoals[0])
}

function remove(id) {
    return database('dailygoal')
        .delete()
        .where('id', id)
        .returning('*')
        .then(dailygoals => dailygoals[0])
}

module.exports = {
    list,
    read,
    create,
    update,
    remove
}