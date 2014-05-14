var mongoose = require('mongoose')
    , async = require('async')
    , Order = mongoose.model('Order')
    , _ = require('underscore')

exports.create = function (req, res) {
    var order = new Order(req.body)
    order.user = req.user
    order.save()
    res.jsonp(order)
}

exports.show = function(req, res){
    res.jsonp(req.order);
}

exports.order = function(req, res, next, id){
    var Order = mongoose.model('Order')

    Order.load(id, function (err, order) {
        if (err) return next(err)
        if (!order) return next(new Error('Failed to load order ' + id))
        req.order = order
        next()
    })
}

exports.all = function(req, res){
    Order.find().populate('user').exec(function(err, order) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(order);
        }
    });
}