const db = require('APP/db')
const Place = require('APP/db/models/place')
const seedUsers = () => db.Promise.map([
  {name: 'Khristian Brooks', pictureURL:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13240027_1045425745494916_1567629497244100846_n.jpg?oh=f088624437462810e5830b6d275f1d99&oe=58C87EC7',
   email: 'kh.brooks02@gmail.com', password: '1234', place:{country: 'United States', city: 'New York', location: [40.712783, -74.005941]}},
  {name: 'Barack Obama', pictureURL: 'http://www.sdpk.eu/wp-content/uploads/2014/07/number-2-u-s-president-barack-obama-second-most-admired-person-planet.jpg',
   email: 'god@example.com', password: '1234', place:{country: 'United States', city: 'New York', location: [40.712783, -74.005941]}},
], user => db.model('users').create(user, {include: [Place]} ))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
