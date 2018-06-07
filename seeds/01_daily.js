exports.seed = function (knex, Promise) {
  return knex('dailygoal').del().then(() => {
      return knex('dailygoal').insert([{
          id: 1,
          goal: 'Finish tower back-end',
          due: '06/08/18',
          done: 'No',
          comment: 'Getting there!',
          image: 'https://aws-tiqets-cdn.imgix.net/images/content/da0b659013eb49cf816407c5ada7bd3c.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=b765f82b2ff445149c6c30cbb8caaf35&w=330&h=330&dpr=1'

        },
        {
          id: 2,
          goal: 'Finish tower front-end',
          due: '06/08/18',
          done: 'No',
          comment: 'Got started!',
          image: 'https://media.istockphoto.com/photos/shanghai-landmarks-picture-id656311250?k=6&m=656311250&s=612x612&w=0&h=CGkuSdaYCd3ZKPAC0A22_-_v-_Ral8GaUFjTBEF_LEg='
        }
      ])
  })
}
