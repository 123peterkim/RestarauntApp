var mongoose = require('mongoose')
  , async = require('async')
  , OrderArchive = mongoose.model('OrderArchive')
  , _ = require('underscore')

exports.create = function (req, res) {
  console.log('req.body = '+req.body);
  var orderarchive = new OrderArchive(req.body)
  console.log('orderarchive = '+orderarchive);
  
  orderarchive.user = req.user
  console.log('orderarchive.user = '+orderarchive.user);
  // orderarchive.save()
  orderarchive.save(function(err) {
    console.log('err = '+err)
  })
  res.jsonp(orderarchive)
  
}

exports.show = function(req, res){
  res.jsonp(req.orderarchive);
}

exports.orderarchive = function(req, res, next, id){
  var OrderArchive = mongoose.model('OrderArchive')
 
  OrderArchive.load(id, function (err, orderarchive) {
    if (err) return next(err)
    if (!orderarchive) return next(new Error('Failed to load orderarchive ' + id))
    req.orderarchive = orderarchive
    next()
  })
}

exports.all = function(req, res){
 OrderArchive.find().populate('user').exec(function(err, orderarchive) {
   if (err) {
     res.render('error', {status: 500});
   } else {      
       res.jsonp(orderarchive);
   }
 });
}

exports.update = function(req, res){
  var orderarchive = req.orderarchive
  orderarchive = _.extend(orderarchive, req.body)
 
  orderarchive.save(function(err) {
    res.jsonp(orderarchive)
  })
}

exports.destroy = function(req, res){
  var orderarchive = req.orderarchive
  orderarchive.remove(function(err){
    if (err) {
      res.render('error', {status: 500});
    }  else {
      res.jsonp(1);
    }
  })
}