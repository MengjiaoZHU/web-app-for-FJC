const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//redirect directive
// (function(){

//     'use strict';
//     function ngRedirectTo($window) {

//         return {

//             restrict: 'A',
//             link: function(scope, element, attributes) {
//                 element.bind('click', function (event) {
//                     //assign ng-Redirect-To attribute value to location
//                     $window.location.href = attributes.ngRedirectTo;
//                 });
//             }
//         };
//     }
//     angular.module('app').directive('ngRedirectTo', ngRedirectTo);
//     //inject $window service for redirection
//     redirectTo.$inject = ['$window'];
// }());


//register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			console.log(err);
			res.json({success: false, msg: 'Failed to register'});
		} else {
			res.json({success: true, msg: 'User registered'});
		}
	});
});

//authenticate
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}
		//user input and hashed password
		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user, config.secret, {
					expiresIn: 86400 //one day
				});

				res.json({
					success: true,
					token: 'JWT' + token,
					user: {
						id: user._id,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

//profile 
//2nd parameter protect 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;