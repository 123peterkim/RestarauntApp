var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var OrderSchema = new Schema({
    menuItem: {type: String},
    specialRequest: {type: String},

    user: {type: Schema.ObjectId, ref:'User'}
});


OrderSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id : id }).populate('user').exec(cb);
    }
};

mongoose.model('Order', OrderSchema);