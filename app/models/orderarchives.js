/**
 * Created by josecontreras on 5/17/14.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

  var OrderArchiveSchema = new Schema({
  date: { type: Date, default: Date.now },
  restaurantName: String,
  selectedrestaurant: String,
  restaurantName: String,
  menuItem: [
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String,
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String,
    String, 
    String, 
    String, 
    String
    ],
  specialRequest: [
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String,
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String, 
    String,
    String, 
    String, 
    String, 
    String
  ]
  // specialRequest: String,
  // user: {type: Schema.ObjectId, ref:'User'}
});

  OrderArchiveSchema.statics = {
  load: function (id, cb) {
    console.log('orderarchiveschema ID =' + id)
    this.findOne({ _id : id }).populate('user').exec(cb);
  }

};

mongoose.model('OrderArchive', OrderArchiveSchema);