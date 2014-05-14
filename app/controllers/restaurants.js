/**
 * Created by taylorcase on 5/7/14.
 */

var mongoose = require('mongoose')
    , async = require('async')
    , Restaurant = mongoose.model('Restaurant')
    , _ = require('underscore')


// CRUD_CREATE

// END CRUD_CREATE

exports.create = function (req, res) {
    var restaurant = new Restaurant(req.body)
    restaurant.save()
    res.jsonp(restaurant)
}

exports.show = function(req, res) {
    res.jsonp(req.restaurant);
}

exports.restaurant = function(req, res, next, id) {
    var Restaurant = mongoose.model('Restaurant')

    Restaurant.load(id, function (err, restaurant) {
        if(err) return next(err)
        if(!restaurant) return next(new Error('Failed to load restaurant ' + id))
        req.restaurant = restaurant
        next()
    })
}

exports.all = function(req, res) {
    Restaurant.find().populate('restaurant').exec(function(err, restaurants) {
        if (err) {
            res.render('error', { status: 500 });
        }
        else {
            res.jsonp(restaurants);
        }
    });
}

exports.update = function(req, res) {
    var restaurant = req.restaurant
    restaurant = _.extend(restaurant, req.body)
    console.log("exports.update function");
    restaurant.save(function(err) {
        res.jsonp(restaurant)
    })
}

exports.destroy = function(req, res) {
    var restaurant = req.restaurant
    restaurant.remove(function(err) {
        if (err) {
            res.render('error', { status: 500 });
        }
        else {
            res.jsonp(1);
        }
    })
}

exports.find = function(req, res) {
    var db = req.db;
    var restaurants = db.get('restaurants');
    restaurants.find({});
}