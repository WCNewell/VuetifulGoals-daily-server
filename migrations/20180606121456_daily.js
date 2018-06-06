exports.up = function (knex, Promise) {
    return knex.schema.createTable('dailygoal', table => {
        table.increments('id')
        table.string('date')
        table.string('goal')
        table.string('due')
        table.string('done')
        table.string('comment')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('dailygoal')
}
