const db = require('APP/db');
const Sequelize = require('sequelize');

module.exports = db.define('bucketlist', {
	toDo: {
		type: Sequelize.STRING
	},
	completed: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
})