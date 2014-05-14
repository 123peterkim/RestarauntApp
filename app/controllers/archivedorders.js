var mongoose = require('mongoose')
    , async = require('async')
    , ArchivedOrder = mongoose.model('ArchivedOrderSchema')
    , _ = require('underscore')


// CRUD_CREATE
exports.create = function (req, res) {
    var archivedOrder = new ArchivedOrder(req.body)
    archivedOrder.save()
    res.jsonp(archivedOrder)
}
// END CRUD_CREATE

exports.show = function(req, res) {
    res.jsonp(req.archivedOrder);
}

exports.archivedOrder = function(req, res, next, id) {
    var ArchivedOrder = mongoose.model('ArchivedOrder')

    ArchivedOrder.load(id, function (err, archivedOrder) {
        if(err) return next(err)
        if(!archivedOrder) return next(new Error('Failed to load archivedOrder ' + id))
        req.archivedOrder = archivedOrder
        next()
    })
}

exports.all = function(req, res) {
    ArchivedOrder.find().populate('archivedOrder').exec(function(err, archivedOrder) {
        if (err) {
            res.render('error', { status: 500 });
        }
        else {
            res.jsonp(archivedOrder);
        }
    });
}

exports.update = function(req, res) {
    var archivedOrder = req.archivedOrder
    archivedOrder = _.extend(archivedOrder, req.body)
    console.log("exports.update function");
    archivedOrder.save(function(err) {
        res.jsonp(archivedOrder)
    })
}

exports.destroy = function(req, res) {
    var archivedOrder = req.archivedOrder
    archivedOrder.remove(function(err) {
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
    var archivedOrder = db.get('archivedOrder');
    archivedOrder.find({});
}
    , Order = mongoose.model('Order')
    , _ = require('underscore')

exports.find
