exports.seed = function (knex, Promise) {
  return knex('dailygoal').del().then(() => {
      return knex('dailygoal').insert([{
          id: 1,
          date: '06/04/18',
          goal: 'Finish tower back-end',
          due: '11/04/18',
          done: 'No',
          comment: 'Getting there!'
        },
        {
          id: 2,
          date: '06/06/18',
          goal: 'Finish tower front-end',
          due: '11/04/18',
          done: 'No',
          comment: 'Got started!'
        }
      ])
  })
}
