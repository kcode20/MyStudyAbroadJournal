const Sequelize = require('sequelize')
const db = require('APP/db')

const Place = db.define('place', {
  country: Sequelize.STRING,  
  city: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.FLOAT)
})

module.exports = Place;
