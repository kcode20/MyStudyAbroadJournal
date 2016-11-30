const Place = require('APP/db/models/place');
const User = require('APP/db/models/user');



const place = require('express').Router()
	.get('/:id', function(req, res, next){
		Place.findById(req.params.id)
		.then(place => {
			console.log("----PLACE----", place);
			res.send(place);
		})
	})
	
   .put('/users/:userId', function(req, res, next){
       User.findOne({where: {id: req.params.userId}, include: [Place]})
       .then(foundUser => {
       		console.log(foundUser);
       		foundUser.update({place: req.params.place})
       })
       .then(res.sendStatus(201))
       .catch(next)
   })


module.exports = place
